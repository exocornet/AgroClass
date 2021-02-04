import './scss/style.scss';

document.querySelector('.menu-hamburger').onclick = function () {
  document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
  document.querySelector('.block-click-hamburger').classList.toggle('block-click-hamburger_active');
  document.querySelector('.contacts').classList.toggle('contacts_active');
}

// document.querySelector('.modal').onclick = function () {
//
// }

document.addEventListener("DOMContentLoaded", function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});