function insert(num) {
    let numero = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = numero + num;
}

function clean() {
    document.querySelector('#resultado').innerHTML = "";
}

function calcular() {
    let resultado = document.querySelector('#resultado').innerHTML;
    if(resultado) {
        document.querySelector('#resultado').innerHTML = eval(resultado)
    } else {
        document.querySelector('#resultado').innerHTML = "Nada..."
    }
}