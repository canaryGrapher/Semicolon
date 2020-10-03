import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Sidebar } from './components/Sidebar.js';

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
      currentPage: 'home'
    };
  }

  connectedCallback() {
    console.log('connected');
    render(Sidebar, document.querySelector('#sidebar'));
    render(Navbar, document.querySelector('#navbar-container'));
    render(Footer, document.querySelector('#footer'));
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [
      /* array of attribute names to monitor for changes */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  // there can be other element methods and properties
}

// document.addEventListener(
//   'elementRendered',
//   function (event) {
//     const elem = event.target;
//   },
//   false
// );
window.customElements.define('nav-bar', App);
