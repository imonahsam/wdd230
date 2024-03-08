const mainNav = document.querySelector('navigation');
const ham = document.querySelector("menu");

ham.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    ham.classList.toggle('open');
});