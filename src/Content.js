import getDOM from './UIController';

const { content } = getDOM();

const onload = () => {
  const newNode = document.createElement('div');
  const tacoBo = document.createElement('nav');

  const tacoBox = '<div class="tacobox"><h1 class="taco-one">Paco\'s </h1><h1 class="taco-two">Tacos!</h1><h2 class="taco-three">WHERE OUR BEST GUESTS GET THE BEST DEALS</h2></div> <div class="arrow__container"><i class="fas fa-angle-double-down 5x"></i></div>';
  const tacoNavi = '<ul><li id=1 class="clickEvent">Menu</li><li id=2 class="clickEvent">Contact Us</li><li id=3 class="clickEvent">Find Your Paco\'s Tacos!</li> </ul>';

  tacoBo.className = 'taco-nav';
  newNode.className = 'hero';

  content.appendChild(newNode);
  getDOM().hero.innerHTML = tacoBox;
  content.appendChild(tacoBo);
  getDOM().tacoNav.innerHTML = tacoNavi;
};

const cont = () => (
  {
    menu: '<div class="menu"><h1 id="jumpHere">Our Menu!</h1></div><div class="menu-content"><div class="item1"><div class="item-left"><figure class="food-image-contaner"><img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows" width="200" height="200" > </figure>      </div><div class="item-right"><h1>Burrito Lorem Ipsum </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequatur possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellendus soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus illum aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciatis quibusdam dolor veniam?</p></div></div><div  class="item2">      <div class="item-left"><figure class="food-image-contaner"><img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows"width="200" height="200" ></figure></div>  <div class="item-right"><h1>Burrito Lorem Ipsum </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequat  possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellend soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus ill aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciat quibusdam dolor veniam?</p></div></div><div class="item1"><div class="item-left">        <figure class="food-image-contaner"><img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows"width="200" height="200" ></figure>        </div><div class="item-right"><h1>Burrito Lorem Ipsum </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequat  possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellend soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus ill aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciat quibusdam dolor veniam?</p></div></div> ',
    contact: '<div class="contact"><h1 id="jumpHere">Contact Us!</h1></div><div class="contact__card"><div class="contact__card--left"><figure class="contact__card--figure"><img class="contact__card--image"src="Taquero.jpg" alt="" height="300" width="300"></figure></div><div class="contact__card--right"><h1 class="contact__card--header"> Contact Us! </h1><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore saepe nesciunt. Nesciunt voluptates perspiciatis necessitatibus sit, neque qui consectetur? Debitis libero rem deleniti alias assumenda distinctio optio sit aliquid.</p><button class="contact__card--button"> Get in touch </button></div></div>',
    find: '<div class="map__container"><div class="map" style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:500px;height:500px;"><div id="embeddedmap-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=New+York&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="embedded-maphtml" rel="nofollow" href="https://www.embed-map.com" id="get-data-forembedmap">https://www.embed-map.com</a><style>#embeddedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div></div><h1 id="jumpHere" class="map__message"> Find Us, I dare you! </h1>',
  }
);

export { onload, cont };
