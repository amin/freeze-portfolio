const burger = document.querySelector('.nav-button');
const nav = document.querySelector('.nav-container');

burger.addEventListener('click', function () {
    nav.classList.toggle('menu-open');
    burger.classList.toggle('menu-button-active');
    document.body.classList.toggle('no-scroll');
});