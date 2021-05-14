function muda_img(foto) {
    document.getElementById("icone").src = foto;
}

var intervalo = 3000;

function slide1(){
    document.getElementById("banner").src = "slide.js/salada.jpg"
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("banner").src = "slide.js/tomates.jpg"
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src = "slide.js/feijoada.jpg"
    setTimeout("slide4()",intervalo);
}

function slide4(){
    document.getElementById("banner").src = "slide.js/panquecas.jpg"
    setTimeout("slide5()",intervalo);
}

function slide5(){
    document.getElementById("banner").src = "slide.js/carro.jpg"
    setTimeout("slide6()",intervalo);
}

function slide6(){
    document.getElementById("banner").src = "slide.js/berinjela.jpg"
    setTimeout("slide1()",intervalo);
}