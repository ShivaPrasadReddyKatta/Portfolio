'use strict';
const menuBtn = document.querySelector('.menu-btn');
const selectElement = s => document.querySelector(s);
const navLinks = document.querySelectorAll('.nav-link');
let btnOpen = false;

const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
  // console.log(window.pageYOffset);
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

const texts = [`Hi, I'm Shiva Prasad Reddy.`, 'Welcome to my Portfolio!'];
let count = 0;
let ind = 0;
let currentText = '';
let letter = '';
// console.log(texts[1][2]);

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++ind);
  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    ind = 0;
  }
  setTimeout(type, 250);
})();

menuBtn.addEventListener('click', function () {
  if (!btnOpen) {
    menuBtn.classList.add('open');
    selectElement('.nav-list').classList.toggle('active');
    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    });
    btnOpen = true;
  } else {
    menuBtn.classList.remove('open');
    selectElement('.nav-list').classList.remove('active');
    btnOpen = false;
    navLinks.forEach((link, index) => {
      link.style.animation = '';
    });
  }
});
