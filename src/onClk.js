import getDOM from './UIController';
import { cont } from './Content';
import Menu from './Menu';
import Contact from './Contact'

const { menu, contact, find } = cont();

const onClk = () => (
  {
    contact: () => {
      const tacoNtact = document.createElement('div');
      const remo = document.querySelector('.remove');
      if (remo) {
        remo.remove()
      }
      tacoNtact.className = 'contact__container remove';
      getDOM().content.appendChild(tacoNtact);
      getDOM().contactContent.innerHTML = contact;
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
    Menu.render();
    getDOM().contact.classList.remove('clicked');
    getDOM().find.classList.remove('clicked');
    getDOM().menu.classList.add('clicked');
  } else if (target.id === '2') {
    Contact.render();
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
