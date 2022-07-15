export const addListenerHeader = () => {
  /* get all element of dom */
  const menuButton = document.querySelector('#menu-button');
  const mainMenu = document.querySelector('#main-menu');
  const overlay = document.querySelector('#main-overlay');

  /**add class*/
  const activeClass = 'is-active';
  const displayNoneClass = 'displayNone';
  /*Handlers*/
  const handlertoggle = () => {
    mainMenu.classList.toggle(activeClass);
    overlay.classList.toggle(displayNoneClass);
  };

  const handlerClose = () => {
    mainMenu.classList.remove(activeClass);
    overlay.classList.toggle(displayNoneClass);
  };
  const handlerCloseWhenClickLink = (event) => {
    if (event.target.tagName === 'A') {
      handlerClose();
    }
  };
  /*listeners*/
  menuButton.addEventListener('click', handlertoggle);
  overlay.addEventListener('click', handlerClose);
  mainMenu.addEventListener('click', handlerCloseWhenClickLink);
};
