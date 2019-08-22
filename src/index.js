import _ from 'lodash'
import onload from './Content'
import Menu from './Menu'
import Contact from './Contact'
import Find from './Find'

const clicked = (e) => {
  const target = e.srcElement
  if (target.id === '1') {
    Menu.render()
    document.getElementById(3).classList.remove('clicked')
    document.getElementById(2).classList.remove('clicked')
    document.getElementById(1).classList.add('clicked')
  } else if (target.id === '2') {
    Contact.render()
    document.getElementById(2).classList.add('clicked')
    document.getElementById(1).classList.remove('clicked')
    document.getElementById(3).classList.remove('clicked')
  } else {
    Find.render()
    document.getElementById(1).classList.remove('clicked')
    document.getElementById(3).classList.add('clicked')
    document.getElementById(2).classList.remove('clicked')
  }
}

const initializer = () => {
  onload.render()
  const clickEvent = document.querySelectorAll('.clickEvent')
  _.each(clickEvent, (ele) => {
    ele.addEventListener('click', (e) => {
      clicked(e)
    })
  })
}
initializer()
