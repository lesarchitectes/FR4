window.addEventListener('load', function () {
    document.getElementById('corriger').addEventListener('click', corriger);
});

function corriger() {
    var reponses = document.getElementsByClassName('reponse'),
        i;
    
    for (i = 0; i < reponses.length; i++) {
        if (reponses[i].value === reponses[i].dataset.solution) {
            reponses[i].className = 'reponse correcte';
            reponses[i].parentElement.nextElementSibling.style.display = 'none';
        } else {
            reponses[i].className = 'reponse incorrecte';
            reponses[i].parentElement.nextElementSibling.style.display = 'block';
        }
        reponses[i].setAttribute('disabled', 'disabled');
    }
    
    document.getElementById('corriger').setAttribute('disabled', 'disabled');
}
