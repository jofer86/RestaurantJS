const onload = () => {
  const newNode = document.createElement('div'); 
  const tacoBo = document.createElement('nav');
  

  const tacoBox = `<div class="tacobox"><h1 class="taco-one">Paco's </h1><h1 class="taco-two">Tacos!</h1><h2 class="taco-three">WHERE OUR BEST GUESTS GET THE BEST DEALS</h2></div> <div class="arrow__container"><i class="fas fa-angle-double-down 5x"></i></div> `;
  const tacoNav = `<ul><li id=1 class="clickEvent">Menu</li><li id=2 class="clickEvent">Contact Us</li><li id=3 class="clickEvent">Find Your Paco's Tacos!</li> </ul>`;  

  tacoBo.className = 'taco-nav'; 
  newNode.className = 'hero'; 
 
  document.querySelector('.content').appendChild(newNode);
  document.querySelector('.hero').innerHTML = tacoBox;
  document.querySelector('.content').appendChild(tacoBo);
  document.querySelector('.taco-nav').innerHTML = tacoNav; 
}
export { onload }