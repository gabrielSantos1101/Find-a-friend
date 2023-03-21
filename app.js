let inputMenu = document.querySelector('#check')
let menuList = document.querySelector('.menu-list')

inputMenu.addEventListener('change', () => {
  menuList.classList.toggle('hidden')
})

// if (window.screen.width <= 768) {
//   menuList.classList.remove('hidden')
// } else {
//   menuList.classList.add('hidden')
// }
