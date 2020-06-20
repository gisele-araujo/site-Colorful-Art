// validação do formulário de cadastro -----------------------------------------------

/* enquanto o usuário digita um campo, uma validação (que está armazenada em uma função disparada por onkeyup) 
será acionada, caso todas as variáveis globais sejam iguais à TRUE, o usuário será cadastrado com sucesso,
caso contrário, será exibido uma mensagem de erro. */


let validado_nome = false;
let validado_email = false;
let validado_senha = false;
let validado_conf_senha = false;


function validacao_nome() {
    let nome_usuario = valida_nome.value.trim();

    if (nome_usuario) {
        document.getElementById('mensagem_nome').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block; padding: 2px"> Nome OK! </b>';
        validado_nome = true;

    } else {
        document.getElementById('mensagem_nome').innerHTML = '<b style="background-color: #FAFAD2; display: block; padding: 2px"> Digite seu nome. </b>';

    }

}

function validacao_email() {
    let email = valida_email.value;

    document.getElementById('mensagem_email').innerHTML = '';

    if (email) {
        for (let i = 0; i <= email.length - 1; i++) {

            if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0 && email.indexOf(' ') == -1) {
                document.getElementById('mensagem_email').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block;; padding: 2px"> Email OK! </b>';
                validado_email = true;

            } else {
                document.getElementById('mensagem_email').innerHTML = '<b style="background-color: #FAFAD2; display: block; padding: 2px">Digite um email válido. </b>';
            }
        }
    }
}

function validacao_senha() {
    let senha = valida_senha.value;

    document.getElementById('mensagem_senha').innerHTML = '';

    if (senha) {
        for (let i = 0; i <= senha.length - 1; i++) {

            if (senha.length >= 8) {
                document.getElementById('mensagem_senha').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block; padding: 2px"> Senha OK! </b>';
                validado_senha = true;

            } else {
                document.getElementById('mensagem_senha').innerHTML = '<b style="background-color: #FAFAD2; display: block; padding: 2px"> Sua senha deve conter pelo menos 8 caracteres </b>'
            }
        }
    }
}


// CADASTRO

function cadastrar(event) {
    event.preventDefault();

    mensagem_erro.innerHTML = '';

    let name = valida_nome.value;
    let email = valida_email.value;
    let password = valida_senha.value;
    let conf_senha = confirma_senha.value;
    let senha_valida = password == conf_senha;

    // confirmação de senha

    if (conf_senha) {
        if (senha_valida) {
            validado_conf_senha = true;

        } else {
            confirma_senha.value = '';
        }
    }

    // validação final dos dados

    if (validado_nome == false || valida_email == false || validado_senha == false || validado_conf_senha == false) {

        mensagem_erro.innerHTML = 'Por favor, preencha os campos corretamente conforme orientações';

    } else {

        // mensagem para o usuário
        sucesso.classList.add("fadeIn");
        sucesso.style.display = 'block'
        formulario_cad.style.display = 'none';


        // CÓDIGO PARA ENVIO DE INFORMAÇÕES AO BANCO DE DADOS

        //criando uma variavel para os parametros que serao enviados
        let params = "nome=" + name + "&email=" + email + "&senha=" + password;

        //abrindo a conexão com a rota
        let ajax = new XMLHttpRequest();
        ajax.open("POST", "http://localhost:3333/users");
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        ajax.send(params);
    }
}

let form_cad = document.getElementById("formulario_cad")
form_cad.addEventListener("submit", cadastrar);


// LOGIN 

function logar(event) {
    event.preventDefault();

    let ajax = new XMLHttpRequest();

    //abre conexao com a nossa rota de get
    ajax.open("GET", "http://localhost:3333/users");

    //verifica se a nossa rota devolveu uma resposta
    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {

            let usuarios = JSON.parse(ajax.responseText);
            let email_digitado = login_email.value;
            let nome_cadastrado = '';


            for (let i = 0; i < usuarios.length; i++) {

                if (email_digitado == usuarios[i].Email) {

                    nome_cadastrado = usuarios[i].Nome;
                    window.location.href = 'conteudo.html';

                    sessionStorage.nomeUsuario = nome_cadastrado;
                    sessionStorage.mudaMenu = 'none';
                    sessionStorage.mudaMenuLogin = 'inline-block';
                }
            }

            if (nome_cadastrado == '') {
                alert('Email ou senha inválidos')
            }
        }
    }
    //Para a conexao funcionar, temos que colocar o ajax.send, porem como a rota é de get, não enviamos nada
    ajax.send();
}

let form_login = document.getElementById("formulario_login")
form_login.addEventListener("submit", logar);