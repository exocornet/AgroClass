import './scss/style.scss';

document.querySelector('.menu-hamburger').onclick = function () {
  document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
  document.querySelector('.menu-pages__click-hamburger').classList.toggle('menu-pages__click-hamburger_active');
  document.querySelector('.contacts').classList.toggle('contacts_active');
}