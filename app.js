let inputMenu = document.querySelector('#check')
let menuList = document.querySelector('.menu-list')
const menuHamburger = document.querySelector('.hamburger-menu')

inputMenu.addEventListener('click', () => {
  menuList.classList.toggle('hidden')
})

const navLinks = document.querySelectorAll('.menu-list a[href^="#"]')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      menuList.classList.add('hidden')
      inputMenu.checked = false
    }
  })
})

window.addEventListener('load', () => {
  if (window.innerWidth >= 900) {
    menuList.classList.remove('hidden')
    menuHamburger.classList.add('hidden')
  } else {
    menuList.classList.add('hidden')
    menuHamburger.classList.remove('hidden')
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    menuList.classList.remove('hidden')
    menuHamburger.classList.add('hidden')
  } else {
    menuList.classList.add('hidden')
    menuHamburger.classList.remove('hidden')
  }
})

// ======== Slider ========

function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight

  function markup(remove) {
    wrapperMarkup(remove)
    dotMarkup(remove)
    arrowMarkup(remove)
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment)
  }

  function createDiv(className) {
    var div = document.createElement('div')
    var classNames = className.split(' ')
    classNames.forEach(name => div.classList.add(name))
    return div
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft)
      removeElement(arrowRight)
      return
    }
    arrowLeft = document.querySelector('.arrow--left')
    arrowLeft.addEventListener('click', () => slider.prev())
    arrowRight = document.querySelector('.arrow--right')
    arrowRight.addEventListener('click', () => slider.next())

    wrapper.appendChild(arrowLeft)
    wrapper.appendChild(arrowRight)
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper)
      removeElement(wrapper)
      return
    }
    wrapper = createDiv('navigation-wrapper')
    slider.container.parentNode.appendChild(wrapper)
    wrapper.appendChild(slider.container)
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots)
      return
    }
    dots = createDiv('dots')
    slider.track.details.slides.forEach((_e, idx) => {
      var dot = createDiv('dot')
      dot.addEventListener('click', () => slider.moveToIdx(idx))
      dots.appendChild(dot)
    })
    wrapper.appendChild(dots)
  }

  function updateClasses() {
    var slide = slider.track.details.rel
    slide === 0
      ? arrowLeft.classList.add('arrow--disabled')
      : arrowLeft.classList.remove('arrow--disabled')
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add('arrow--disabled')
      : arrowRight.classList.remove('arrow--disabled')
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add('dot--active')
        : dot.classList.remove('dot--active')
    })
  }

  slider.on('created', () => {
    markup()
    updateClasses()
  })
  slider.on('optionsChanged', () => {
    console.log(2)
    markup(true)
    markup()
    updateClasses()
  })
  slider.on('slideChanged', () => {
    updateClasses()
  })
  slider.on('destroyed', () => {
    markup(true)
  })
}

var slider = new KeenSlider('#my-keen-slider', {}, [navigation])


window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var links = document.querySelectorAll('.menu-list a');
  var currentSection = '';
  
  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].offsetTop;
    var sectionHeight = sections[i].offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = sections[i].getAttribute('id');
    }
  }
  
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
    if (links[i].getAttribute('href').indexOf('#' + currentSection) !== -1) {
      links[i].classList.add('active');
    }
  }
});
