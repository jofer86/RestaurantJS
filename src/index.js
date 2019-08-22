import _ from 'lodash';
import onload from './Content';
import getDOM from './UIController';
import Menu from './Menu';
import Contact from './Contact'
import Find from './Find';

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
    Find.render();
    getDOM().contact.classList.remove('clicked');
    getDOM().find.classList.add('clicked');
    getDOM().menu.classList.remove('clicked');
  }
};

const initializer = () => {
  onload.render();  
  const clickEvent = document.querySelectorAll('.clickEvent');
  _.each(clickEvent, (ele) => {
    ele.addEventListener('click', (e) => {
      clicked(e)
    });
  });
};
initializer(); 
