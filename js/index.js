



    const Project = document.getElementsByClassName("project_slider_top_p");

    // document.getElementById('project_slider_top_p').addEventListener('click' , function ()
    // {
    //     let divElement = document.getElementById('project_slider');
    //     let divElement2 = document.getElementById('project_slider_bottom_p');
    //
    //
    //     // divElement.classList.toggle("open_projects");
    //     // divElement2.classList.toggle("go_down");
    //
    // });

    const items = document.querySelectorAll('.item');

    const expand = (item, i) => {
        items.forEach((it, ind) => {
            if (i === ind) return;
            it.clicked = false;
        });
        gsap.to(items, {
            width: item.clicked ? '14vw' : '8vw',
            duration: 2,
            ease: 'elastic(1, .6)' });


        item.clicked = !item.clicked;
        gsap.to(item, {
            width: item.clicked ? '42vw' : '15vw',
            duration: 2.5,
            ease: 'elastic(1, .3)' });

    };

    items.forEach((item, i) => {
        item.clicked = false;
        item.addEventListener('click', () => expand(item, i));
    });

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




