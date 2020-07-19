




let imagePathList = ['images/slide1.jpeg', 'images/slide2.jpg', 'images/slide3.jpg', 'images/slide4.jpg', 'images/slide5.jpeg'];
let slideShowindex = 0;
let slide = document.querySelector(".slide")
let fuck = document.querySelector(".general")
displaySlide(slideShowIndex);

// Changes the slide index according to button pressed and loads new slide
function changeSlide(n) {
    slideShowindex = (slideShowIndex + n) % length;
    displaySlide(slideShowindex);
}

// Displays the currently selected slide
function displaySlide(index) {
    slide.src = imagePathList[index];
}
