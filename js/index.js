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

function passarSlides() {
    var slides = document.querySelectorAll('.Slides');
    let index = 0;
    slides.forEach((elemento, i) => {
        if (hasClass(slides[i], 'active')) {
            index = i;
        }
    })
    removeClass(slides[index], 'active');
    if (index >= slides.length - 1) {
        addClass(slides[0], 'active');
    } else {
        addClass(slides[index + 1], 'active');
    }
}

function voltarSlides() {
    var slides = document.querySelectorAll('.Slides');
    let index = 0;
    slides.forEach((elemento, i) => {
        if (hasClass(slides[i], 'active')) {
            index = i;
        }
    })
    removeClass(slides[index], 'active');
    if (index <= 0) {
        addClass(slides[slides.length - 1], 'active');
    } else {
        addClass(slides[index - 1], 'active');
    }
}

function addClass(el, newClassName) {
    el.className += ' ' + newClassName;
}

function removeClass(el, removeClassName) {
    var elClass = el.className;
    while (elClass.indexOf(removeClassName) != -1) {
        elClass = elClass.replace(removeClassName, '');
        elClass = elClass.trim();
    }
    el.className = elClass;
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}