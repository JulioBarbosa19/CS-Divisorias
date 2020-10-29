var slideIndex = 1;
showSlides(slideIndex);

function slideAtual(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var dots = document.getElementsByClassName('dots');

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }

    dots[slideIndex - 1].className += 'active';
}