const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counter = document.querySelectorAll('.ability__bars-counter'),
    Lines = document.querySelectorAll('.ability__bars-line span');

counter.forEach((item, i) => {
    Lines[i].style.width = item.innerHTML;
});

var category1 = document.getElementById("catalog");

  document.querySelector('a[href="#catalog"]').addEventListener('click', function(e) {

    e.preventDefault();

    category1.scrollIntoView({ behavior: 'smooth' });

  });