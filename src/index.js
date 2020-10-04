import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Sidebar } from './components/Sidebar.js';
import { Home } from './components/pages/Home.js';
import { Catalogue } from './components/pages/Catalogue.js';
import { Checkout } from './components/pages/Checkout.js';
import { Search, SearchQuery } from './components/pages/Search.js';

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
      currentPage: ''
    };
  }

  renderBasicElements() {
    render(Sidebar, document.querySelector('#sidebar'));
    render(Navbar, document.querySelector('#navbar-container'));
    render(Footer, document.querySelector('#footer'));
  }

  connectedCallback() {
    this.renderBasicElements();
    console.log(window.location.hash);
    if (window.location.hash === '#home' || window.location.hash === '') {
      // if (window.location.hash === '#home') {
      this.state.currentPage = 'home';
    } else if (window.location.hash === '#catalogue') {
      this.state.currentPage = 'catalogue';
    } else if (window.location.hash === '#checkout') {
      this.state.currentPage = 'checkout';
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
      // window.history.pushState({}, null, '#catalogue');
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
    } else if (this.state.currentPage === 'checkout') {
      window.history.pushState({}, 'checkout', '#checkout');
      document.title = 'Checkout | Semicolon';
      render(Checkout, document.querySelector('#page-content'));
      document
        .getElementById(`${this.state.currentPage}`)
        .classList.add('active');
    }

    window.addtocart = (props) => {
      console.log(props);
      eval(`if(this.state.${props}) {
        this.state.${props} += 1
        } else { this.state.${props} = 1 }`);
      console.log(this.state);
    };
    
    window.SearchQuery = SearchQuery;

    window.Router = (props) => {
      window.history.pushState({}, props, `#${props}`);
      this.connectedCallback();
    };
  }
}
window.customElements.define('nav-bar', App);
