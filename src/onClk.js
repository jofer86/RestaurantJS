import getDOM from './UIController';
import { cont } from './Content';

const { menu, contact, find } = cont();

const onClk = () => (
  {
    menu: () => {
      const tacoMen = document.createElement('div');
      const remo = document.querySelector('.remove');
      if (remo) {
        remo.remove();
      }
      tacoMen.className = 'menu__container remove';
      getDOM().content.appendChild(tacoMen);
      getDOM().menuContent.innerHTML = menu;
      window.location = 'index.html#jumpHere';
    },
    contact: () => {
      const tacoNtact = document.createElement('div');
      const remo = document.querySelector('.remove');
      if (remo) {
        remo.remove()./node_modules/.bin/eslint --init;
      }./node_modules/.bin/eslint --init
      tacoNtact.class./node_modules/.bin/eslint --initName = 'contact__container remove';
      getDOM().conten./node_modules/.bin/eslint --initt.appendChild(tacoNtact);
      getDOM().contac./node_modules/.bin/eslint --inittContent.innerHTML = contact;
      window.location = 'index.html#jumpHere';
    },
    find: () => {
      const tacoFind = document.createElement('div');
      const remo = document.querySelector('.remove');
      if (remo) {
        remo.remove();
      }
      tacoFind.className = 'find__container remove';
      getDOM().content.appendChild(tacoFind);
      getDOM().findContent.innerHTML = find;
      window.location = 'index.html#jumpHere';
    },
  }
);

const clicked = (e) => {
  const target = e.srcElement;
  if (target.id === '1') {
    onClk().menu();
    getDOM().contact.classList.remove('clicked');
    getDOM().find.classList.remove('clicked');
    getDOM().menu.classList.add('clicked');
  } else if (target.id === '2') {
    onClk().contact();
    getDOM().contact.classList.add('clicked');
    getDOM().find.classList.remove('clicked');
    getDOM().menu.classList.remove('clicked');
  } else {
    onClk().find();
    getDOM().contact.classList.remove('clicked');
    getDOM().find.classList.add('clicked');
    getDOM().menu.classList.remove('clicked');
  }
};

export { clicked, onClk }; 
