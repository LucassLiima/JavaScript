let x = document.getElementById("ValorInicio");
let y = document.getElementById("ValorFinal");

function contar()
{
    while(x.value <= parseInt(y.value))
{
    //Criar um elemento p
    let paragrafo = document.createElement("p")
    //Criar um texto
    let texto = document.createTextNode(x.value)

    //adicionar um texto no elemento
    paragrafo.appendChild(texto);

    //adicionar o elemento no section
    document.getElementById("contar").appendChild(paragrafo)
    console.log(x)
    
    x.value++ //(x = x + 1)
}
}

