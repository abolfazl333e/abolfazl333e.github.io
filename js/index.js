// const Slide = document.querySelector('.Slide');
// let currentIndex = 0;
//
// function changeSlide() {
//     currentIndex = (currentIndex + 1) % Slide.children.length;
//     Slide.style.transform = `translateX(-${currentIndex * 100}%)`;
// }
//
// setInterval(changeSlide, 5000); // Change slide every 5 seconds


const Images = document.querySelectorAll('.project_slider img');
let CurrentImageIndex = 0;

function showNextImage() {
    Images[CurrentImageIndex].classList.remove('active');
    CurrentImageIndex = (CurrentImageIndex + 1) % Images.length;
    Images[CurrentImageIndex].classList.add('active');
}

// Show the first image initially
Images[CurrentImageIndex].classList.add('active');

// Automatically change image every 3 seconds (adjust as needed)
setInterval(showNextImage, 5000);