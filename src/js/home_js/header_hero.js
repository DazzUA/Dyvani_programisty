const mobileMenu = document.querySelector('.js-menu');
const openMenu = document.querySelector('.js-open-menu');
const closeMenu = document.querySelector('.js-close-menu');

const toggleMenu = function () {
  const isMenuOpen = mobileMenu.classList.toggle('is-open');
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
};

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

window
  .matchMedia('(min-width: 335px)')
  .addEventListener('change', onMatchMedia);

function onMatchMedia(event) {
  if (!event.matches) return;
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
}
