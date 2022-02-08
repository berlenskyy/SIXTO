var slideIndex = 0;
showSlides();

// // Next/previous controls
// function plusSlides(n) {
//     slideIndex += n;
//     // showSlide(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlide(slideIndex = n);
// }

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "black";
    }
    for (i = 0; i < dots.length; i++) {

        // dots[i].className = dots[i].className.replace("", "active ");
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "white";
    setTimeout(showSlides, 3800); // Change image every 2 seconds

}

function modal() {
    var menuBars = document.querySelector('.menu');
    var spans = document.querySelectorAll('.menu label');
    var modal = document.querySelector('.modal');

    if (menuBars.className == "menu") {
        spans[2].style.display = "none";
        spans[0].className = "xMenu1";
        spans[1].className = "xMenu2";
        modal.style.display = "block";
        menuBars.classList.add("menu", "menu2");
    } else {
        menuBars.classList.remove("menu2");
        spans[2].className = "span";
        spans[2].style.display = "block";
        spans[0].classList.replace("xMenu1", "span");
        spans[1].classList.replace("xMenu2", "span");
        modal.style.display = "none";
        menuBars.className = "menu"
    }

}