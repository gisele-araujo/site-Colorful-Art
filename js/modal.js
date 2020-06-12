// estrutura MODAL 

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



// validação do formulário

function validacao_email() {
    let email = valida_email.value.trim();

    document.getElementById('mensagem_email').innerHTML = '';

    for (let contadorE = 0; contadorE <= email.length - 1; contadorE++) {

        if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0) {
            document.getElementById('mensagem_email').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block;"> Email OK! </b>';
        } else {
            document.getElementById('mensagem_email').innerHTML = '<b style="background-color: #FAFAD2; display: block">Por favor, digite um email válido. </b>';
        }

    }
}

function validacao_senha() {
    let senha = valida_senha.value.trim();

    document.getElementById('mensagem_senha1').innerHTML = '';

    for (let contadorS = 0; contadorS <= senha.length - 1; contadorS++) {

        if (senha.length >= 8) {
            document.getElementById('mensagem_senha1').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block;"> Senha OK! </b>';
        } else {
            document.getElementById('mensagem_senha1').innerHTML = '<b style="background-color: #FAFAD2; display: block"> Sua senha deve ter pelo menos 8 caracteres </b>'
        }
    }
}

function cadastrar() {
    let senha_valida = valida_senha.value.trim() == confirma_senha.value.trim();
    let nao_preenchidos = valida_senha.value.trim() == '' || confirma_senha.value.trim() == '' || valida_email.value.trim() == '' || valida_nome.value.trim() == '';

    document.getElementById('mensagem_senha2').innerHTML = '';

    if (!senha_valida) {
        document.getElementById('mensagem_senha2').innerHTML = '<b style="color: #8B0000; background-color: #f9e1d9; display: block;"> Senhas não coincidem </b>';
        confirma_senha.value = '';
        event.preventDefault()
    }

    if (nao_preenchidos) {
        alert ('Por favor, preencha todos os campos corretamente');
        event.preventDefault()
    }
    
}
 // MODAL DE PINTURAS
 
let imagens_gallery= document.querySelectorAll('.small_img');
let modal_gallery = document.querySelector('.modal-galeria');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#fechar_galeria');
let srcVal="";

for (let i = 0; i < imagens_gallery.length; i++){
    imagens_gallery[i].addEventListener('click',function(){
        
        srcVal = imagens_gallery[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal_gallery.classList.toggle('modal_active');
    });
    
}


btClose.addEventListener('click', function(){
    modal_gallery.classList.toggle('modal_active');
});
