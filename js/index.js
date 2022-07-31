import { activePanel } from './modules/activePanel.js';
import { addListenerHeader } from './modules/menu.js';
import { handlerActiveTab } from './modules/tabs.js';

window.addEventListener('load', () => {
  addListenerHeader();
  activePanel();
  handlerActiveTab();
});
