import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app.js';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#NavigationDrawer'), // Ubah menjadi NavigationDrawer
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
