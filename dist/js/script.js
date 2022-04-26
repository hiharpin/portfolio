// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector( 'header' );
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//checkbox
const checkbox = document.querySelector
('#toggle');
const html = document.querySelector
('html');

checkbox.addEventListener('click', function () 
{
   checkbox.checked ? html.classList.add
   ('dark') : html.classList.remove('dark');
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});