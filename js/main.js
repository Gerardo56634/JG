// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(".nav-links a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Responsive Menu
let burgerMenu = document.querySelector(".burger");
const nav_links = document.querySelector(".nav-links");
burgerMenu.addEventListener('click', () => {
    if (nav_links.classList.contains('menu-active')) {
        nav_links.classList.remove('menu-active');
        burgerMenu.classList.remove('burger-active');
    } else {
        nav_links.classList.add('menu-active');
        burgerMenu.classList.add('burger-active');
    }
});

// Scroll Reveal
ScrollReveal({
    duration: 2000,
    delay: 200
});

// Home Section
ScrollReveal().reveal('.slogan-heading', {origin: 'left'});
ScrollReveal().reveal('.slogan-p', {origin: 'right'});

// About Section
ScrollReveal().reveal('.about-img', {origin: 'left'});
ScrollReveal().reveal('.about-content', {origin: 'right'});

// Services Section
ScrollReveal().reveal('.heading', {origin: 'top'});
const services = document.querySelectorAll('.service');
services.forEach((service, index) => {
    ScrollReveal().reveal(service, { 
        origin: 'bottom', 
        delay: index * 100 // Ajustamos este valor según lo rápido que queramos que aparezcan los elementos
    });
});

// Contact Section
ScrollReveal().reveal('.form-description', {origin: 'left'});
ScrollReveal().reveal('.form-contact', {origin: 'right'});
