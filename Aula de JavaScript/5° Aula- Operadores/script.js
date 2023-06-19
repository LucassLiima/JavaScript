let resultadoSoma = document.getElementById("soma")
let resultadoSub = document.getElementById("subtracao")
let resultadoMult = document.getElementById("multiplicacao")
let resultadoDivisao = document.getElementById("divisao")
let resultadoPotencia = document.getElementById("potencia")
let resultadoModulo = document.getElementById("resto")

let x;
let y;
let z;

x = 5
y = 2
z = x + y;

resultadoSoma.innerHTML = z

let a = 5;
let b = 2
let c = a - b;

resultadoSub.innerHTML = c

let d = 5;
let e = 2
let f = d * e;

resultadoMult.innerHTML = f

let g = 5;
let h = 2
let i = g / h;

resultadoDivisao.innerHTML = i

let j = 5;
let k = 2
let l = j**k

resultadoPotencia.innerHTML = l

let m = 13;
let n = 3
let o = m % n;

resultadoModulo.innerHTML = o