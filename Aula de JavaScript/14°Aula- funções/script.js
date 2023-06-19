//Funções são usadas em programação pra executar ações q são rotineiramente executadas em um programa

function soma(a,b,c)
{
    return a * b * c;
}

console.log(soma)

let x = soma(5,6,8)
console.log(x)

//Arrow Function
let subtracao = (a,b) => {
    return a -b
}