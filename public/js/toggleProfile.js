// const toggleBtn = document.querySelector('.burger');
// const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.dropdown');
console.log(menu);
(function () {
  //   var toggleBtn = document.querySelector('.burger');
  //   var menuContainer = document.querySelector('.menu-container');
  menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    // menuContainer.classList.toggle('is-active');
  });
})();
