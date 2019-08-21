import _ from 'lodash';
import { clicked } from './onClk';
import { onload } from './Content';


const initializer = () => {
  onload();
  const clickEvent = document.querySelectorAll('.clickEvent');
  _.each(clickEvent, (ele) => {
    ele.addEventListener('click', (e) => clicked(e));
  });
};
initializer(); 
