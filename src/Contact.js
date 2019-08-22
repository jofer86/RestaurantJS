import getDOM from './UIController'

const Contact = (() => {
  const render = () => {
    const tacoNtact = document.createElement('div')
    const remo = document.querySelector('.remove')
    if (remo) {
      remo.remove()
    }
    tacoNtact.className = 'contact__container remove'
    getDOM.content.appendChild(tacoNtact)
    document.querySelector('.contact__container').innerHTML = `<div class="contact">
        <h1 id="jumpHere">Contact Us!</h1>
      </div>

      <div class="contact__card">
        <div class="contact__card--left">
          <figure class="contact__card--figure">
            <img class="contact__card--image"src="Taquero.jpg" alt="" height="300" width="300">
          </figure>
        </div>

        <div class="contact__card--right">
          <h1 class="contact__card--header"> Contact Us! </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore saepe nesciunt. Nesciunt voluptates perspiciatis necessitatibus sit, neque qui consectetur? Debitis libero rem deleniti alias assumenda distinctio optio sit aliquid.</p>
          <button class="contact__card--button"> Get in touch </button>
        </div>
      </div>`
    window.location = 'index.html#jumpHere'
  }
  return { render }
})()

export default Contact
