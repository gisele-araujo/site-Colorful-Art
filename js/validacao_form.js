// validação do formulário de cadastro -----------------------------------------------

//enquanto o usuário digita, estas validações visuais já são acionadas.

function validacao_nome() {
    let nome_usuario = valida_nome.value.trim();

    if (!nome_usuario) {
        document.getElementById('mensagem_nome').innerHTML = '<b style="background-color: #FAFAD2; display: block"> Digite seu nome. </b>';
    } else {
        document.getElementById('mensagem_nome').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block;"> Nome OK! </b>';
    }

}

function validacao_email() {
    let email = valida_email.value.trim();

    document.getElementById('mensagem_email').innerHTML = '';

    for (let i = 0; i <= email.length - 1; i++) {

        if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0) {
            document.getElementById('mensagem_email').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block;"> Email OK! </b>';
        } else {
            document.getElementById('mensagem_email').innerHTML = '<b style="background-color: #FAFAD2; display: block">Digite um email válido. </b>';
        }

    }
}

function validacao_senha() {
    let senha = valida_senha.value.trim();

    document.getElementById('mensagem_senha').innerHTML = '';

    for (let i = 0; i <= senha.length - 1; i++) {

        if (senha.length >= 8) {
            document.getElementById('mensagem_senha').innerHTML = '<b style="color: #008000; background-color: #cff7cf; display: block;"> Senha OK! </b>';
        } else {
            document.getElementById('mensagem_senha').innerHTML = '<b style="background-color: #FAFAD2; display: block"> Sua senha deve conter pelo menos 8 caracteres </b>'
        }
    }
}

//validação geral dos dados

function validacao() {
    let erros = []; // vetor que poderá ser preenchido com if's verdadeiros a partir do push.

    let senha_valida = valida_senha.value.trim() == confirma_senha.value.trim();
    let nao_preenchidos = valida_senha.value.trim() == '' || confirma_senha.value.trim() == '' || valida_email.value.trim() == '' || valida_nome.value.trim() == '';


    if (nao_preenchidos) {
        erros.push("Por favor, preencha todos os campos corretamente");
        event.preventDefault()
    }

    if (!senha_valida) {
        erros.push("Senhas informadas não coincidem");
        confirma_senha.value = '';
        event.preventDefault()
    }

    return erros;
}


function cadastrar() {
    var erros = validacao();
    mensagem_erro.innerHTML = ``;

    if (erros.length > 0) {

        for (var i = 0; i < erros.length; i++) {
            var erro = erros[i];
            var li = document.createElement("li");

            li.innerHTML = erro;
            mensagem_erro.appendChild(li);
            // função appendChild() cria um novo elemento, nesse caso, um li dentro de uma ul que tem o id "mensagem_erro";
        }

    } else {
        alert ('Cadastrado com sucesso! Agora é só fazer login e usufruir da arte :)')

        // CÓDIGO PARA ENVIO DE INFORMAÇÕES AO BANCO DE DADOS
    }
}
