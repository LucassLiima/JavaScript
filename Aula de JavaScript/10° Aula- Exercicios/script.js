let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")

function Aperte()
{
    switch(numero.value)
    {
        case "1":
        resposta.innerHTML = "Domingo, final de semana"
        break;
        case "2":
        resposta.innerHTML = "Segunda-feira, dia útil"
        break;
        case "3":
        resposta.innerHTML = "Terça-feira, dia útil"
        break;
        case "4":
        resposta.innerHTML = "Quarta-feira, dia útil"
        break;
        case "5":
        resposta.innerHTML = "Quinta-feira, dia útil"
        break;
        case "6":
        resposta.innerHTML = "Sexta-feira, dia útil"
        break;
        case "7":
        resposta.innerHTML = "Sábado, final de semana"
        break;

        default:
        resposta.innerHTML = "Inválido"
    }
}