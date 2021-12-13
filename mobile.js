// close and open menu items 
const openNav = document.querySelector('.top');
const closebtn = document.querySelector('.closebtn');
const home = document.querySelector('.main_menu');
const head_section = document.querySelector('.head-section');
const myNav_menu = document.getElementById('myNav_mobile');


function openMobileMenu() {
  // creat layout
  myNav_menu.style.width = '100%';
  // add blur in background
  home.classList.add('blur');
  head_section.classList.add('blur');
}

openNav.addEventListener('click', openMobileMenu);

function closeMobileMenu() {
  //    remove the overlay
  myNav_menu.style.width = '0%';
  //    remove blur from background
  home.classList.remove('blur');
  head_section.classList.remove('blur');
}

closebtn.addEventListener('click', closeMobileMenu);

const overlayContent = document.querySelector('.overlay-content');

function closeMobileMenu() {
  myNav_menu.style.width = '0%';
  home.classList.remove('blur');
  head_section.classList.remove('blur');
}
overlayContent.addEventListener('click', closeMobileMenu);