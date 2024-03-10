const mainNav = document.querySelector('.navigation');
const hamburger = document.querySelector("#menu");

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburger.classList.toggle('show');
});