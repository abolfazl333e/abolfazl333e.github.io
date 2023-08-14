



    const Project = document.getElementsByClassName("project_slider_top_p");

    function toggleClass()
    {
        let divElement = document.getElementById('project_slider');
        let divElement2 = document.getElementById('project_slider_bottom_p');

        divElement.classList.toggle("open_projects");
        divElement2.classList.toggle("go_down");
    }

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




