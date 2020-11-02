var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

    var slides = document.getElementsByClassName('Slides');

    for (let i = 0; i < slides.length; i++) {
        removeClass(slides[i], 'active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    addClass(slides[slidesIndex - 1], 'active');
    setTimeout(showSlides, 5000);
}