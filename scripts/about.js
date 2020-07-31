// Define slideshow components
let imagePathList = ['images/slide1_square.jpg', 'images/slide2_square.jpg', 'images/slide3_square.jpg',
 'images/slide4_square.jpg', 'images/slide5_square.jpg', 'images/slide6_square.jpg', 'images/slide7_square.jpg'];

//Find html elements and load up first page
let slideShowIndex = 0;
const slideShowImage = document.querySelector('.slide');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
displaySlide(slideShowIndex);

// Set up click events for buttons
previous.onclick = function() {
    changeSlide(-1);
}

next.onclick = function() {
    changeSlide(1);
}

// Changes the slide index according to button pressed and loads new slide
function changeSlide(n) {
    slideShowIndex = (slideShowIndex + n) % imagePathList.length;
    if (slideShowIndex === -1) {
        slideShowIndex = 4;
    }
    displaySlide(slideShowIndex);
}

// Displays the currently selected slide
function displaySlide(index) {
    slideShowImage.src = imagePathList[index];
}