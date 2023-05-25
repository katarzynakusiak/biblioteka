window.onload = function() {
    showSlide(0);
};

var slideIndex = 0;
var slides = document.getElementsByClassName("slide-container");



function changeSlide(n) {
  if (slideIndex < 0) {
    slideIndex = 0;  
  } else {
    slideIndex += n;
  }

  if (slideIndex < 0) {
      slideIndex = 0; 
  } else if (slideIndex >= slides.length) {
      slideIndex = slides.length - 1; 
  }

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}





function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
