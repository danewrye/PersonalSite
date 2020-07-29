// Define slideshow components
let imagePathList = ['images/slide1.jpeg', 'images/slide2.jpg', 'images/slide3.jpg', 'images/slide4.jpg', 'images/slide5.jpeg'];
let titleList = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'];
let textList = [];
textList[0] = 'one';
textList[1] = 'two';
textList[2] = 'three';
textList[3] = 'four';
textList[4] = 'five';

//Find html elements and load up first page
let slideShowIndex = 0;
const slideShowImage = document.querySelector('.slide');
const slideShowTitle = document.querySelector('.descriptionTitle');
const slideShowText = document.querySelector('.description');
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
    slideShowTitle.innerHTML = titleList[index];
    slideShowText.innerHTML = textList[index];
}