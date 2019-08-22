import getDOM from './UIController';

const Menu = (() => {
  const render = () => {
    const tacoMen = document.createElement('div');
    const remo = document.querySelector('.remove');
    if (remo) {
      remo.remove();
    }
    tacoMen.className = 'menu__container remove';
    getDOM.content.appendChild(tacoMen);
    document.querySelector('.menu__container').innerHTML =
    
    `<div class="menu">
      <h1 id="jumpHere">Our Menu!</h1>
    </div>

    <div class="menu-content">
      <div class="item1">
        <div class="item-left">
          <figure class="food-image-contaner">
            <img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows" width="200" height="200" >
          </figure>
        </div>
        <div class="item-right">
          <h1>Burrito Lorem Ipsum </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequatur possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellendus soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus illum aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciatis quibusdam dolor veniam?</p>
        </div>
      </div>
      
      <div class="item2">
        <div class="item-left">
          <figure class="food-image-contaner">
            <img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows" width="200" height="200" >
          </figure>
        </div>
        <div class="item-right">
          <h1>Burrito Lorem Ipsum </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequatur possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellendus soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus illum aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciatis quibusdam dolor veniam?</p>
        </div>
      </div>
      
      <div class="item1">
        <div class="item-left">
          <figure class="food-image-contaner">
            <img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows" width="200" height="200" >
          </figure>
        </div>
        <div class="item-right">
          <h1>Burrito Lorem Ipsum </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequatur possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellendus soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus illum aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciatis quibusdam dolor veniam?</p>
        </div>
      </div>
    </div>`

    window.location = 'index.html#jumpHere';
  }
  return { render };        
})();

export default Menu;
