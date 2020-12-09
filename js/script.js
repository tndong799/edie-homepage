const iconMenu = $('.header__nav-bar-icon');
const menu = $('.header__nav-bar');

iconMenu.addEventListener('click', e => {
    iconMenu.classList.toggle('active');
    menu.classList.toggle('active');
})