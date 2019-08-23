import _ from 'lodash'
import onload from './Content'
import Menu from './Menu'
import Contact from './Contact'
import Find from './Find'

const clicked = (e) => {
  const target = e.srcElement
  const cleanup = () => {
    document.getElementById(1).classList.remove('clicked')
    document.getElementById(2).classList.remove('clicked')
    document.getElementById(3).classList.remove('clicked')
  }
  if (target.id === '1') {
    Menu.render()
    cleanup()
    document.getElementById(1).classList.add('clicked')
  } else if (target.id === '2') {
    Contact.render()
    cleanup()
    document.getElementById(2).classList.add('clicked')
  } else {
    Find.render()
    cleanup()
    document.getElementById(3).classList.add('clicked')
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
