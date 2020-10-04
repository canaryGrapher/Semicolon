import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Sidebar } from './components/Sidebar.js';
import { Home } from './components/pages/Home.js';
import { Catalogue } from './components/pages/Catalogue.js';
import { Cart } from './components/pages/Cart.js';
import { Search, SearchQuery } from './components/pages/Search.js';
import { CartManager } from './components/CartManager.js';
import { gameCatalogue } from './data/game_catalogue.js';

const render = (template, node) => {
  if (!node) return;
  node.innerHTML = typeof template === 'function' ? template() : template;
  const event = new CustomEvent('elementRenders', {
    bubbles: true
  });
  node.dispatchEvent(event);
  return node;
};

class App extends HTMLElement {
  constructor() {
    super();
    this.state = {
      currentPage: '',
      data: []
    };
  }

  renderBasicElements() {
    render(Sidebar, document.querySelector('#sidebar'));
    render(Navbar, document.querySelector('#navbar-container'));
    render(Footer, document.querySelector('#footer'));
  }

  connectedCallback() {
    this.renderBasicElements();
    if (window.location.hash === '#home' || window.location.hash === '') {
      this.state.currentPage = 'home';
    } else if (window.location.hash === '#catalogue') {
      this.state.currentPage = 'catalogue';
    } else if (window.location.hash === '#cart') {
      this.state.currentPage = 'cart';
    } else if (window.location.hash === '#search') {
      this.state.currentPage = 'search';
    }
    if (this.state.currentPage === 'home') {
      window.history.pushState({}, 'home', '#home');
      document.title = 'Semicolon';
      render(Home, document.querySelector('#page-content'));
      document
        .getElementById(`${this.state.currentPage}`)
        .classList.add('active');
    } else if (this.state.currentPage === 'catalogue') {
      window.location.hash = '#catalogue';
      window.history.pushState({}, null, '#catalogue');
      document.title = 'Catalogue | Semicolon';
      render(Catalogue, document.querySelector('#page-content'));
      document
        .getElementById(`${this.state.currentPage}`)
        .classList.add('active');
    } else if (this.state.currentPage === 'search') {
      window.history.pushState({}, 'search', '#search');
      document.title = 'Search | Semicolon';
      render(Search, document.querySelector('#page-content'));
      document
        .getElementById(`${this.state.currentPage}`)
        .classList.add('active');
    } else if (this.state.currentPage === 'cart') {
      CartManager;
      window.history.pushState({}, 'cart', '#cart');
      document.title = 'Cart | Semicolon';
      render(Cart, document.querySelector('#page-content'));
      document
        .getElementById(`${this.state.currentPage}`)
        .classList.add('active');
    }

    window.CartManager = CartManager;
    window.addtocart = (props) => {
      eval(`if(this.state.data.${props}) {
        this.state.data.${props} += 1
        } else { this.state.data.${props} = 1 }`);
      console.log(this.state.data);
    };

    window.change = (props) => {
      window.history.pushState(
        {},
        `${props.toLowerCase()}`,
        `#${props.toLowerCase()}`
      );
      document.title = `${props} | Semicolon`;
      this.state.currentPage = `${props.toLowerCase()}`;
      render(props, document.querySelector('#page-content'));
      this.connectedCallback();
    };

    window.SearchQuery = SearchQuery;

    window.Router = (props) => {
      window.history.pushState({}, props, `#${props}`);
      this.connectedCallback();
    };
        
        if (window.location.hash === '#cart') {
          for (let item in this.state.data) {
            for (let i = 0; i < gameCatalogue.length; i++) {
              if (
                item ==
                gameCatalogue[i].name
                  .split(' ')
                  .join()
                  .replace(/[^a-zA-Z ]/g, '')
              ) {
                let x = eval(
                  `Number(gameCatalogue[i].cost)*this.state.data.${item}`
                );
                let quantity = eval(`this.state.data.${item}`);
                let cartColumn = `<div class="cart-content d-flex flex-column">
                <h1 class="cart-heading">${gameCatalogue[i].name}</h1>
                <div class="w-30">
                  <img src=${gameCatalogue[i].image} />
                </div>
                <div class="w-40 d-flex flex-column justify-content-center">
                  <table>
                    <tr>
                      <td class="text-bold">Quantity:</td>
                      <td class="text-left">${quantity}</td>
                    </tr>
                    <tr>
                      <td class="text-bold">Cost:</td>
                      <td class="text-left">&#x20BF;${gameCatalogue[i].cost}</td>
                    </tr>
                  </table>
                </div>
                <div
                  class="w-30 d-flex flex-column justify-content-center text-center total"
                >
                  <h2>Total:<span class="cost"> &#x20BF;${x}</span></h2>
                </div>
              </div>`;
                document.getElementById(
                  'container-cart'
                ).innerHTML += cartColumn;
              }
            }
          }
        }
  }
}
window.customElements.define('nav-bar', App);
