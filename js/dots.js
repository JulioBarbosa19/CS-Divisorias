function slide1() {
    document.getElementById('id').src = "/imagens/imagem1.jpg";
    setTimeout("slide2()", 1000)
}

function slide2() {
    document.getElementById('id').src = "/imagens/imagem2.jpg";
    setTimeout("slide3()", 1000)
}

function slide3() {
    document.getElementById('id').src = "/imagens/imagem3.jpg";
    setTimeout("slide1()", 1000)
}