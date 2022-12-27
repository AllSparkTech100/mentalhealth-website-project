// Preloader Animation.
const fadeOut = () => {
   const loaderWrapper = document.querySelector('.loader-wrapper');
   loaderWrapper.classList.add('fade');
  }
  window.addEventListener('load', fadeOut);

//Menu.
let logo = document.querySelector(".container");
let menu = document.querySelector(".menu");

logo.addEventListener("click", function () {
  menu.classList.toggle("showmenu");
});