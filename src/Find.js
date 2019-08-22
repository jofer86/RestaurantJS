import getDOM from './UIController';

const Find = (() => {
  const render = () => {
    const tacoFind = document.createElement('div');
    const remo = document.querySelector('.remove');
    if (remo) {
      remo.remove();
    }
    tacoFind.className = 'find__container remove';
    getDOM.content.appendChild(tacoFind);
    document.querySelector('.find__container').innerHTML = 
      `<div class="map__container">
        <div class="map" style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:500px;height:500px;">
          <div id="embeddedmap-canvas" style="height:100%; width:100%;max-width:100%;">
            <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=New+York&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
          <a class="embedded-maphtml" rel="nofollow" href="https://www.embed-map.com" id="get-data-forembedmap">https://www.embed-map.com</a>
          <style>
            #embeddedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}
          </style>
        </div>
      </div>
      <h1 id="jumpHere" class="map__message"> Find Us, I dare you! </h1>`
    window.location = 'index.html#jumpHere';
  }
  return { render }
})();

export default Find;
