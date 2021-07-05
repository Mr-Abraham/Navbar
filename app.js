const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.navlinks li');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');

hamburger.onclick = function() {
    navlinks.classList.toggle('open');
    links.forEach(link => {
    link.classList.toggle('fade');
    });
    l1.classList.toggle('line1');
    l2.classList.toggle('line2');
    l3.classList.toggle('line3');
};