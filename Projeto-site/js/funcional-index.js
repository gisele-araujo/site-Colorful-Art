// SCRIPT EFEITO [DATA-ANIME] DA SESSÃO APRESENTAÇÃO, COM UM DELAY MAIOR PARA SE ADAPTAR MELHOR A PÁGINA.

const target = document.querySelectorAll('[data-anime]');

function animeScroll() {
    const windowTop = window.pageYOffset - 150;
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate');
        }
    })
}
animeScroll()
if (target.length) {
    window.addEventListener('scroll', function () {
        animeScroll();
    });
}


// ALTERAÇÃO DO MENU AO FAZER LOGIN

let esconde = sessionStorage.mudaMenu;
let aparece = sessionStorage.mudaMenuLogin;
let nome= sessionStorage.nomeUsuario;
document.getElementById('nome_logado').innerHTML = nome;
autent.style.display = esconde;
document.querySelector('.nome-logado').style.display = aparece;
