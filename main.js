/* Barra superior */

window.addEventListener('scroll', onScroll)

const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection() {
  const targetLine = scrollY + innerHeight / 2
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu */

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/* ScrollReveal */

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home Image, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content'
)
