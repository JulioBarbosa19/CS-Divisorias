var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Não realizei alterações; 
function showSlides(n) {

    var slides = document.getElementsByClassName('Slides');
    for (let i = 0; i < slides.length; i++) {
        removeClass(slides[i], 'active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    addClass(slides[slideIndex - 1], 'active');
    setTimeout(showSlides, 5000);
}
// Passar e Voltar pecorrem a lista de Slides para
// Verificar onde está a classe active e 
// Em seguida definem o Indice onde ele está para 
// Usar como refêrencia para acionar o seguinte ou o anterior;
function passarSlides() {
    var slides = document.querySelectorAll('.Slides');
    let index = 0;
    slides.forEach((elem, i) => {
        if (hasClass(slides[i], 'active')) {
            index = i
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
    slides.forEach((elem, i) => {
        if (hasClass(slides[i], 'active')) {
            index = i
        }
    })
    removeClass(slides[index], 'active');
    if (index <= 0) {
        addClass(slides[slides.length - 1], 'active');
    } else {
        addClass(slides[index - 1], 'active');
    }
}
//Recebe o elemento e adiciona a classe para ativar o CSS
function addClass(el, newClassName) {
    el.className += ' ' + newClassName;
}
// Verifica se existe a classe no elemento e remove a classe 
function removeClass(el, removeClassName) {
    var elClass = el.className;
    while (elClass.indexOf(removeClassName) != -1) {
        elClass = elClass.replace(removeClassName, '');
        elClass = elClass.trim();
    }
    el.className = elClass;
}
// Verifica em booleano se existe a classe no item buscado
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function slideAtual(n) {
    var slides = document.querySelectorAll('.Slides');
    let index = 0;
    slides.forEach((elem, i) => {
        if (hasClass(slides[i], 'active')) {
            index = i
        }
    })
    removeClass(slides[index], 'active');
    addClass(slides[n], 'active');
}