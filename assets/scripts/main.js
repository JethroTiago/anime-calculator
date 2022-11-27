const arigato = new Audio('/assets/sounds/Arigato.mp3');
const aha = new Audio('assets/sounds/Aha.mp3');
const yamete = new Audio('assets/sounds/Yamete.mp3');

function insert(num) {
    aha.play();
    let numero = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = numero + num;
}

function clean() {
    yamete.play();
    document.querySelector('#result').innerHTML = "";
}

function back() {
    let resultado = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    arigato.play();
    let resultado = document.querySelector('#result').innerHTML;
    if(resultado) {
        document.querySelector('#result').innerHTML = eval(resultado)
    } else {
        document.querySelector('#result').innerHTML = "Nothing..."
    }
}