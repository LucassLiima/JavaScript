let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let operador = document.getElementById("operador")
let resultado = document.getElementById("resultado")


function Aperte(){
    switch(operador.value)
    {
        case "+":
        let soma = parseInt(numero1.value) + parseInt(numero2.value)
        resultado.innerHTML = soma
        break;
        case "-":
        let subtracao = parseInt(numero1.value) - parseInt(numero2.value)
        resultado.innerHTML = subtracao
        break;
        case "*":
        let multiplicacao = parseInt(numero1.value) * parseInt(numero2.value)
        resultado.innerHTML = multiplicacao
        break;
        case "/":
        let divisao = parseInt(numero1.value) / parseInt(numero2.value)
        resultado.innerHTML = divisao
        break;
    }
}