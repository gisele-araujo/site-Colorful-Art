
// ALTERAÇÃO DO MENU AO FAZER LOGIN

let esconde = sessionStorage.mudaMenu;
let aparece = sessionStorage.mudaMenuLogin;
let nome = sessionStorage.nomeUsuario;

document.getElementById('nome_logado').innerHTML = nome;
document.getElementById('autent').style.display = esconde;
document.querySelector('.nome-logado').style.display = aparece;


// desabilitar busca 

const inputBusca = document.getElementById("campo_busca");
const buttonBusca = document.getElementById("botao_busca");

inputBusca.disabled = true;
buttonBusca.disabled = true;

inputBusca.classList.add("desabilitado");

if(nome) {
    inputBusca.disabled = false;
    inputBusca.classList.remove("desabilitado");
}


// ACESSO AO CONTEÚDO

function access() {
    if (!nome) {
        alert('Você precisa estar logado no site para acessar este conteúdo!')
    }
}