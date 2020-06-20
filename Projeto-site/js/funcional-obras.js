// ALTERAÇÃO DO MENU AO FAZER LOGIN

let esconde = sessionStorage.mudaMenu;
let aparece = sessionStorage.mudaMenuLogin;
let nome = sessionStorage.nomeUsuario;

document.getElementById('nome_logado').innerHTML = nome;
document.getElementById('autent').style.display = esconde;
document.querySelector('.nome-logado').style.display = aparece;


// ACESSO AO CONTEÚDO

function access() {
    if (nome) {
        window.location.href = 'conteudo.html';
    } else {
        alert('Você precisa estar logado no site para acessar este conteúdo!')
    }
}