import { activePanel } from './modules/activePanel.js';
import { addListenerHeader } from './modules/menu.js';

window.addEventListener('load', () => {
  addListenerHeader();
  activePanel();
});
