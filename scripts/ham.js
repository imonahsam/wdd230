const mainNav = document.querySelector('navigation');
const ham = document.querySelector("menu");

ham.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    ham.classList.toggle('show');
});