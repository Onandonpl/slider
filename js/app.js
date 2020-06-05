const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let actualSlide = 0;

function showSlide(i) {
  slides[actualSlide].className = "slide";
  actualSlide = (i + slides.length) % slides.length;
  slides[actualSlide].className = "show";
}

function prevSlide() {
  showSlide(actualSlide - 1);
}

function nextSlide() {
  showSlide(actualSlide + 1);
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
////////////////////////////////////////////////////////
const slides2 = document.querySelectorAll(".slide2");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
let actualSlide2 = 1;

function showSlide2(i) {
  slides2[actualSlide2].className = "slide2";
  actualSlide2 = (i + slides2.length) % slides2.length;
  slides2[actualSlide2].className = "slide2 show2";
}

function prevSlide2() {
  showSlide2(actualSlide2 - 1);
}

function nextSlide2() {
  showSlide2(actualSlide2 + 1);
}

prev2.addEventListener("click", prevSlide2);
next2.addEventListener("click", nextSlide2);
//////////////////////////////////////////////////
