var header = document.querySelector('header');
var menu = document.querySelector('.material-menu');
var circle = document.querySelector('.material-btn');
var link = document.querySelector('.material-content').querySelectorAll('li');
var ham = document.querySelector('.material-hamburger');
var main = document.querySelector('main');
var win = window;

function openMenu(event) {
    menu.classList.toggle('active');
    circle.classList.toggle('active');
    ham.classList.toggle('material-close');
    main.classList.toggle('active');
    for (var i = 0; i < link.length; i++) {
        link[i].classList.toggle('active');
    }
    event.preventDefault();
    event.stopImmediatePropagation();
}

function closeMenu() {
    if (circle.classList.contains('active')) {
        menu.classList.remove('active');
        circle.classList.remove('active');
        for (var i = 0; i < link.length; i++) {
            link[i].classList.toggle('active');
        }
        ham.classList.remove('material-close');
        main.classList.remove('active');
    }
}

function scrollDown(event) {
    if (window.scrollY > 100) {
        header.classList.add('bg-black');
    } else {
        header.classList.remove('bg-black');
    }
}

window.addEventListener('scroll', scrollDown);
circle.addEventListener('click', openMenu, false);
win.addEventListener('click', closeMenu, false);