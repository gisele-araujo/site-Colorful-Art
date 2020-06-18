function heart() {
    var aux = document.querySelectorAll('.fa-heart');
    aux.forEach(icon => {
        icon.addEventListener('click', favoritar);
    });

    function favoritar(event) {
        if (event.target.classList.contains('favorito')) {
            event.target.classList.remove('favorito');
        } else {
            event.target.classList.add('favorito');
        }
    }
}