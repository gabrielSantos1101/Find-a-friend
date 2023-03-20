let inputMenu = document.querySelector('#check')
let menuList = document.querySelector('.menu-list')

inputMenu.addEventListener('change', () => {
  menuList.classList.toggle('hidden')
})
