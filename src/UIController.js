const getDOM = (() => ({
  content: document.querySelector('.content'),
  menu: document.getElementById(1),
  contact: document.getElementById(2),
  find: document.getElementById(3),
  hero: document.querySelector('.hero'),
  tacoNav: document.querySelector('.taco-nav'),
  menuContent: document.querySelector('.menu__container'),
  contactContent: document.querySelector('.contact__container'),
  findContent: document.querySelector('.find__container'),
}))();

export default getDOM; 
