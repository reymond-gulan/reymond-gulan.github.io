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
  let width = window.innerWidth;
  if (width <= 375) {
    devTools.style.display = 'block';
    readMore.innerText = 'Read more about me...';
  } else if (width > 375 && width <= 470) {
    readMore.innerText = 'Read more...';
    devTools.style.display = 'none';
  } else if (width > 470 && width <= 700) {
    devTools.style.display = 'block';
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

let global = document.getElementById('dev-tools-global');
let alpha = document.getElementById('dev-tools-alpha');
let rsd = document.getElementById('dev-tools-rsd');

let globalContent = alphaContent = rsdContent = "";

const tools = {
  global: {
    tools: ['Laravel 9', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'Javascript', 'jQuery', 'VueJS', 'React', 'MongoDB', 'Postman', 'GitHub', 'BitBucket'],
    api: ['Shopify', 'Recharge Payments', 'Everstox', 'Brevo', 'Vimeo', 'MailTrap']
  },
  alpha: {
    tools: ['Laravel 8', 'HTML', 'CSS','Bootstrap', 'Javascript', 'jQuery', 'VueJS', 'MySQL', 
      'Laravel Homestead', 'Laravel Horizon', 'Laravel Forge', 'Laravel Echo', 'GitHub'],
    api: ['Twilio', 'MailGun', 'MailTrap']
  },
  rsd: {
    tools: ['Laravel 7', 'HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery', 'MySQL'],
    api: []
  }
};


for (let [key, value] of Object.entries(tools.global.tools)) {
  globalContent += '<span class="badge">'+ value +'</span> ';
}
globalContent += '<br />';
for (let [key, value] of Object.entries(tools.global.api)) {
  globalContent += '<span class="badge">'+ value +'</span> ';
}

for (let [key, value] of Object.entries(tools.alpha.tools)) {
  alphaContent += '<span class="badge">'+ value +'</span> ';
}
alphaContent += '<br />';
for (let [key, value] of Object.entries(tools.alpha.api)) {
  alphaContent += '<span class="badge">'+ value +'</span> ';
}

for (let [key, value] of Object.entries(tools.rsd.tools)) {
  rsdContent += '<span class="badge">'+ value +'</span> ';
}
alphaContent += '<br />';
for (let [key, value] of Object.entries(tools.rsd.api)) {
  rsdContent += '<span class="badge">'+ value +'</span> ';
}


global.innerHTML = globalContent;
alpha.innerHTML = alphaContent;
rsd.innerHTML = rsdContent;

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