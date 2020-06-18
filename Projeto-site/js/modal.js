// MODAL DE AUTENTICAÇÃO-----------------------------------------------

function iniciaModal(modalID) {

    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar'); //ativar classe .mostrar 
    modal.addEventListener('click', (event) => {
        if (event.target.id == modalID || event.target.className == 'fechar') {
            modal.classList.remove('mostrar'); //desativar classe .mostrar 
        }
    })
}

// login
const logar_menu = document.getElementById('login_acesso'); // id do elemento clicável 
const logar_rodape = document.getElementById('login_rodape');
logar_menu.addEventListener('click', function () {
    iniciaModal('modal-login') // id do modal
})
logar_rodape.addEventListener('click', function () {
    iniciaModal('modal-login')
})

// cadastro
const cadastrar_menu = document.getElementById('cadastrar_acesso');
const cadastrar_rodape = document.getElementById('cadastro_rodape');
cadastrar_menu.addEventListener('click', function () {
    iniciaModal('modal-cadastro')
})
cadastrar_rodape.addEventListener('click', function () {
    iniciaModal('modal-cadastro')
})



// MODAL DE PINTURAS-----------------------------------------------

function galeria() {
    let imagens_gallery = document.querySelectorAll('.small_img');
    let modal_gallery = document.querySelector('.modal-galeria');
    let modalImg = document.querySelector('#modal_img');
    let btClose = document.querySelector('#fechar_galeria');
    let srcVal = "";

    for (let i = 0; i < imagens_gallery.length; i++) {
        imagens_gallery[i].addEventListener('click', function () {

            srcVal = imagens_gallery[i].getAttribute('src');
            modalImg.setAttribute('src', srcVal);
            modal_gallery.classList.toggle('modal_active');
        });
    }

    btClose.addEventListener('click', function () {
        modal_gallery.classList.toggle('modal_active');
    });
}