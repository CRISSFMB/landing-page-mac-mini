export const handlerActiveTab = () => {
  const tabsSection = document.querySelector('#tabs-section');

  /*convirtiendo mi array de nodos a array normal */
  const getArrayElements = (selector) => {
    return Array.from(tabsSection.querySelectorAll(selector));
  };

  /*guardando cada elementohtml en un array  */

  const images = getArrayElements('.wrapper-img__image');
  const buttons = getArrayElements('.wrapper-buttons__btn');

  function HandlerClickSwitchContent(e) {
    /*index del elemento que le de click*/
    const btnIndex = buttons.indexOf(e.target);
    /*con esta funcion elimino toda la clases y pongo al elemento que le corresponde la clase*/
    changeClasses(buttons, btnIndex);
    changeClasses(images, btnIndex);
  }

  function changeClasses(array, indexa) {
    array.map((element) => {
      element.classList.remove('active');
      array[indexa].classList.add('active');
    });
  }

  buttons.map((btn) => {
    btn.addEventListener('click', HandlerClickSwitchContent);
  });
};
