// copyright year script

var year = new Date();
var currentYear = document.write(year.getFullYear());

// hamburger menu script

const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});