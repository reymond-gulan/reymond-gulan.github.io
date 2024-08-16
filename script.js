const navbar = document.querySelector('.navbar');
const hamburger = navbar.querySelector('.navbar__hamburger');
const menu = document.querySelector('.mobile__menu');
const body = document.querySelector('body');
const year = new Date().getFullYear();
const startYear = 2019;
const totalYears = (year - startYear);

window.onresize = function (e) {
  let readMore = document.getElementById('read-more');
  let devTools = document.getElementById('development-tools');
  if (window.innerWidth <= 375) {
    devTools.style.display = 'block';
    readMore.innerText = 'Read more about me...';
  } else if (window.innerWidth > 375 && window.innerWidth <= 470) {
    readMore.innerText = 'Read more...';
    devTools.style.display = 'none';
  } else if (window.innerWidth > 470 && window.innerWidth <= 700) {
    devTools.style.display = 'block';
    readMore.innerText = 'Read more about me...';
  } else {
    devTools.style.display = 'block';
    readMore.innerText = 'Read more something about me...';
  }
}


// let devTools = document.getElementById('development-tools');
// const logos = {
//   html: '50',
//   css: '49',
//   tailwind: '80',
//   javascript: '50',
//   jquery: '50',
//   vue: '60',
//   react: '60',
//   laravel: '50',
//   mysql: '80',
//   mongo: '65',
//   postman: '70'
// };

// for (let [tool, value] of Object.entries(logos)) {
//   let img = document.createElement('img');
//   img.src = `images/logos/${tool}.png`;
//   img.alt = tool;
//   img.id = 'dev-tools-img';
//   img.width = value;
//   console.log(img);
//   devTools.appendChild(img);
// }

document.getElementById('total-experience').innerText = totalYears;

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