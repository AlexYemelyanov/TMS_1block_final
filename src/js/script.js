"use strict";
let acc = document.getElementsByClassName("skillset__accordion");
let i;
let prev = document.querySelector(".carousel__prev");
let next = document.querySelector(".carousel__next");

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.overflow === "scroll") {
            panel.style.transform = "scaleX(0)";
            panel.style.overflow = "hidden";
        } else {
            panel.style.transform = "scaleX(1)";
            panel.style.overflow = "scroll";
        }
        if (panel.style.height){
            panel.style.height = null;
        } else {
            panel.style.height = '135px';
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
  
}

prev.addEventListener('click', function (e) {
    plusSlides(-1)
});

next.addEventListener('click', function (e) {
    plusSlides(1)
});


