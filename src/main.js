import './scss/style.scss';

document.querySelector('.menu-hamburger').onclick = function () {
  document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
  document.querySelector('.block-click-hamburger').classList.toggle('block-click-hamburger_active');
  document.querySelector('.contacts').classList.toggle('contacts_active');
}