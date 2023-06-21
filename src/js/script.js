"use strict";
let acc = document.getElementsByClassName("skillset__accordion");
let i;
let prev = document.querySelector(".carousel__prev");
let next = document.querySelector(".carousel__next");
let prevCircle = document.querySelector(".carousel__prev-circle");
let nextCircle = document.querySelector(".carousel__next-circle");



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



let slideId = 1;
showSlds(slideId);

// Next/previous controls
function plusSlds(n) {
  showSlds(slideId += n);
}

// Thumbnail image controls
function currentSld(n) {
  showSlds(slideId = n);
}

function showSlds(n) {
  let i;
  let slds = document.getElementsByClassName("carousel__slide-circle");
  if (n > slds.length) {slideId = 1}
  if (n < 1) {slideId = slds.length}
  for (i = 0; i < slds.length; i++) {
      slds[i].style.display = "none";
  }
  slds[slideId-1].style.display = "flex";
  
}

prevCircle.addEventListener('click', function (e) {
    plusSlds(-1)
});

nextCircle.addEventListener('click', function (e) {
    plusSlds(1)
});


