// EFEITO SCROLL NOS ELEMENTOS

const target = document.querySelectorAll('[data-anime]');

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    target.forEach( function(element) {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate');
        }
    })
}
animeScroll()

if(target.length) {
    window.addEventListener('scroll', function () {
    animeScroll();
});
}

// EFEITO MAQUINA DE ESCREVER

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const titulo = document.querySelector('[data-digita]');
typeWriter(titulo);

