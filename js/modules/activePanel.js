const panel = document.querySelector('#monterey');
const backgroundContainer = document.querySelector('.background-container');
const activeClass = 'active';

/*este options nos sirve para indicarle en que porcentaje quiero que mi observe se dispare*/
const options = {
  threshold: 0.5,
};

/*callbackForObserver lo necesitamos para mandarle como callback al IntersectionObserver

ejemplo : new IntersectionObserver(!!!!callbackForObserver!!!!!, options);*/

const callbackForObserver = (entries) => {
  //isIntersect true or false
  const isIntersect = entries[0].isIntersecting;

  if (isIntersect) {
    backgroundContainer.classList.add(activeClass);
  } else {
    backgroundContainer.classList.remove(activeClass);
  }
};

const panelObserver = new IntersectionObserver(callbackForObserver, options);

/*creamos una funcion para activar mi panelObbserver esta funcion se la importa  en mi index .js*/

export const activePanel = () => {
  panelObserver.observe(panel);
};
