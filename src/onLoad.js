const onClk = () => {
  return {  
    menu: () => {
    const tacoMen = document.createElement('div');
    const menuContent = `<div class="menu"><h1 id="jumpHere">Our Menu!</h1></div><div class="menu-content"><div class="item1"><div class="item-left"><figure class="food-image-contaner"><img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows" width="200" height="200" > </figure>      </div><div class="item-right"><h1>Burrito Lorem Ipsum </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequatur possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellendus soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus illum aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciatis quibusdam dolor veniam?</p></div></div><div  class="item2">      <div class="item-left"><figure class="food-image-contaner"><img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows"width="200" height="200" ></figure></div>  <div class="item-right"><h1>Burrito Lorem Ipsum </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequat  possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellend soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus ill aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciat quibusdam dolor veniam?</p></div></div><div class="item1"><div class="item-left">        <figure class="food-image-contaner"><img class="food-image" src="./ryan-concepcion-50KffXbjIOg-unsplash.jpg" alt="taquidows"width="200" height="200" ></figure>        </div><div class="item-right"><h1>Burrito Lorem Ipsum </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dolorum consequat  possimus beatae praesentium nemo id tenetur! Illum, quod libero quidem illo repellend soluta ipsam minima! Quibusdam, minima similique. Cupiditate dignissimos natus ill aperiam magni sed iure nulla culpa, dolorem commodi nam id debitis quidem perspiciat quibusdam dolor veniam?</p></div></div> `;
    const remo = document.querySelector('.remove');
    if(remo){
      remo.remove();
    }
    tacoMen.className = 'menu__container remove';
    document.querySelector('.content').appendChild(tacoMen);
    document.querySelector('.menu__container').innerHTML = menuContent;
    window.location = 'index.html#jumpHere';
    },
    contact: () => {
      const tacoNtact = document.createElement('div');
      const taContent = `<div class="contact"><h1 id="jumpHere">JuJu</div>`;
      const remo = document.querySelector('.remove');
      if(remo){
        remo.remove();
      }      
      tacoNtact.className = 'contact__container remove';
      document.querySelector('.content').appendChild(tacoNtact);
      document.querySelector('.contact__container').innerHTML = taContent;
      window.location = 'index.html#jumpHere'; 
    },
    find: () => {
      const tacoFind = document.createElement('div');
      const taFind = `<div class="find"><h1 id="jumpHere">JuJu</div>`;
      const remo = document.querySelector('.remove');
      if(remo){
        remo.remove();
      }      
      tacoFind.className = 'find__container remove';
      document.querySelector('.content').appendChild(tacoFind);
      document.querySelector('.find__container').innerHTML = taFind;
      window.location = 'index.html#jumpHere'; 
    }  
  } 
}

const getDOM = () => {
  return {
    content: document.querySelector('.content'),
    menu: document.getElementById(1),
    contact: document.getElementById(2),
    find: document.getElementById(3),
    hero: document.querySelector('hero'),
    tacoNav: document.querySelector('taco-nav'),    
    menuContent: document.querySelector('.menu__container')
  }
}

const clicked = e => {
  e = e;  
  let target = e.srcElement,
      text = target.textContent || target.innerText;
  if(target.id === '1'){
    onClk().menu();
    getDOM().contact.classList.remove('clicked');
    getDOM().find.classList.remove('clicked');
    getDOM().menu.classList.add('clicked');    
  }else if (target.id === '2'){
    onClk().contact();
    getDOM().contact.classList.add('clicked');
    getDOM().find.classList.remove('clicked');
    getDOM().menu.classList.remove('clicked');  
  }else{
    onClk().find();
    getDOM().contact.classList.remove('clicked');
    getDOM().find.classList.add('clicked');
    getDOM().menu.classList.remove('clicked');  
  }
} 



export { clicked, getDOM };