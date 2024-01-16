const images = ["img/Arduino_logo.png" , "img/Altium_logo.png" , "img/Mysql_logo.png" , "img/wordpress_logo.png"];
let currentImageIndex = 0;


const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderImage = document.getElementById("sliderImage");

function showImage(index) {
    sliderImage.style.opacity = 0; // Set opacity to 0
    setTimeout(() => {
        sliderImage.src = images[index];
        sliderImage.style.opacity = 1; // Set opacity back to 1
    }, 300); // Adjust the transition duration (in milliseconds)
}

prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Show the initial image
showImage(currentImageIndex);


window.addEventListener("load", function() {
    const myDiv = document.getElementById("myDiv");
    myDiv.style.opacity = 1; // Set opacity to 1 to trigger fade-in
});

window.addEventListener("load", function() {
    const skills = document.getElementById("container_skills");
    myDiv.style.opacity = 1; // Set opacity to 1 to trigger fade-in
});


window.addEventListener("load", function() {
    const skills = document.getElementById("container_About_me");
    myDiv.style.opacity = 1; // Set opacity to 1 to trigger fade-in
});
