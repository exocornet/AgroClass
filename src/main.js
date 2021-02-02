import './scss/style.scss';

document.querySelector('.menu-hamburger').onclick = function () {
  document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
  document.querySelector('.menu').classList.toggle('menu_active');
  document.querySelector('.wrapper-logo-menu').classList.toggle('wrapper-logo-menu_active');
}