var m1 = document.getElementById("m1");
var resultado = document.getElementById("resultado");
var soma;

function SOMA(){
    soma = parseInt(m1.value)  *100;
    resultado.innerHTML = soma;
}