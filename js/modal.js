// MODAL 
function iniciaModal (modalID) { 
    const modal = document.getElementById (modalID); 
    modal.classList.add('mostrar');
    modal.addEventListener('click', (event) => {
        if(event.target.id == modalID || event.target.className == 'fechar'){
            modal.classList.remove ('mostrar');
        }
    })
}

// login
const logar_menu = document.getElementById ('login_acesso'); 
const logar_rodape = document.getElementById ('login_rodape');
logar_menu.addEventListener('click', function() {
    iniciaModal ('modal-login') 
})
logar_rodape.addEventListener('click', function() {
    iniciaModal ('modal-login')
})

// cadastro
const cadastrar_menu = document.getElementById ('cadastrar_acesso');
const cadastrar_rodape = document.getElementById ('cadastro_rodape');
cadastrar_menu.addEventListener ('click', function() {
    iniciaModal ('modal-cadastro')
})
cadastrar_rodape.addEventListener ('click', function() {
    iniciaModal ('modal-cadastro')
})