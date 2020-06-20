// OBRAS


function troca_obras_proximo() {

    fade_obras.classList.add("fadeIn");
    fade_obras2.classList.remove("fadeIn");
    

    // troca de imagens das obras

    document.getElementById("obra1").src = "img/paintings/Klimt-beijo.jpg";
    document.getElementById("obra2").src = "img/paintings/botticelli-nascimento-venus.jpg";
    document.getElementById("obra3").src = "img/paintings/monet-impressao.jpg";
    document.getElementById("obra4").src = "img/paintings/dali-persistencia-da-memoria.jpg";

    //troca de títulos das obras

    document.getElementById("nome_obra1").innerHTML = 'O Beijo';
    document.getElementById("nome_obra2").innerHTML = 'O Nascimento <br> de Vênus';
    document.getElementById("nome_obra3").innerHTML = 'Impressão, <br> Nascer do Sol';
    document.getElementById("nome_obra4").innerHTML = 'A Persistência <br> da Memória';

}

function troca_obras_anterior() {

    fade_obras2.classList.add("fadeIn");
    fade_obras.classList.remove("fadeIn");


    // troca de imagens das obras

    document.getElementById("obra1").src = "img/paintings/gogh-starry-night.jpg";
    document.getElementById("obra2").src = "img/paintings/vinci-monalisa.jpg";
    document.getElementById("obra3").src = "img/paintings/munch-the-scream.jpg"
    document.getElementById("obra4").src = "img/paintings/picasso-vieux.jpg"

    //troca de títulos das obras

    document.getElementById("nome_obra1").innerHTML = 'A Noite Estrelada';
    document.getElementById("nome_obra2").innerHTML = 'Monalisa';
    document.getElementById("nome_obra3").innerHTML = 'O Grito';
    document.getElementById("nome_obra4").innerHTML = 'Velho Guitarrista <br> Cego';

}
// ARTISTAS

function troca_artistas_proximo() {

    fade_artist.classList.add("fadeIn")
    fade_artist2.classList.remove("fadeIn")


    //troca de imagens dos artistas

    document.getElementById("artista1").src = "img/paintings/frida.jpg";
    document.getElementById("artista2").src = "img/paintings/Michelangelo.jpg";
    document.getElementById("artista3").src = "img/paintings/monet.jpeg";
    document.getElementById("artista4").src = "img/paintings/Salvador_Dali.jpg";

    //troca de títulos dos artistas

    document.getElementById("nome_art1").innerHTML = 'Frida Kahlo';
    document.getElementById("nome_art2").innerHTML = 'Michelangelo';
    document.getElementById("nome_art3").innerHTML = 'Claude Monet';
    document.getElementById("nome_art4").innerHTML = 'Salvador Dali';

}
function troca_artistas_anterior() {

    fade_artist2.classList.add("fadeIn")
    fade_artist.classList.remove("fadeIn")


    //troca de imagens dos artistas

    document.getElementById("artista1").src = "img/paintings/gogh-auto-retrato.jpg";
    document.getElementById("artista2").src = "img/paintings/Edvard_Munch.jpg";
    document.getElementById("artista3").src = "img/paintings/Sandro_Botticelli.jpg";
    document.getElementById("artista4").src = "img/paintings/Leonardo-da-Vinci.jpg";

    //troca de títulos dos artistas
    
    document.getElementById("nome_art1").innerHTML = 'Van Gogh';
    document.getElementById("nome_art2").innerHTML = 'Edvard Munch';
    document.getElementById("nome_art3").innerHTML = 'Sandro Botticelli';
    document.getElementById("nome_art4").innerHTML = 'Leonardo da Vinci';
}