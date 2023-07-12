// Animação do menu

const menuDiv = document.getElementById('menu-mobile')

const btnAnimar = document.getElementById('botao-menu')

const sliderSlide = document.querySelector('.slider')

menuDiv.addEventListener('click', animarMenu)

function animarMenu() {

    // Animação do ícone do menu

    const btn = document.getElementById('botao-menu')
    btn.classList.toggle('ativar')

    // Abrir e fechar o menu

    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
    sliderSlide.classList.toggle('sumir')
}

// Slide carroussel

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}







