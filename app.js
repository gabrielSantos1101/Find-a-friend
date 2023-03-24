let inputMenu = document.querySelector('#check')
let menuList = document.querySelector('.menu-list')
const menuHamburger = document.querySelector('.hamburger-menu')

inputMenu.addEventListener('change', () => {
  menuList.classList.toggle('hidden')
})

window.addEventListener('load', () => {
  if (window.innerWidth >= 780) {
    menuList.classList.toggle('hidden')
    menuHamburger.classList.add('hidden')
  } else {
    menuList.classList.add('hidden')
    menuHamburger.classList.remove('hidden')
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 780) {
    menuList.classList.toggle('hidden')
    menuHamburger.classList.add('hidden')
  } else {
    menuList.classList.add('hidden')
    menuHamburger.classList.remove('hidden')
  }
})
