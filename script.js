const navbar = document.querySelector('.navbar');
const hamburger = navbar.querySelector('.navbar__hamburger');
const menu = document.querySelector('.mobile__menu');
const body = document.querySelector('body');

function toggleMenu() {
  hamburger.classList.toggle('navbar__hamburger--active');
  menu.classList.toggle('mobile__menu--active');
  body.classList.toggle('body-scroll-lock');
}

menu.addEventListener('click', function (event) {
  if (event.target.matches('.mobile__links a')) {
    toggleMenu();
  }
});