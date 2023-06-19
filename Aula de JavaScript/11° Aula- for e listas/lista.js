let addItem = document.getElementById("addItem")
function MinhaFuncao()
{
//Criar um elemento li
let li = document.createElement("li");
//Criar um texto
let texto = document.createTextNode(addItem.value);
//Adicionar um texto no elemento
li.appendChild(texto)
//Adicionar o li na MINHALISTA
document.getElementById("MinhaLista").appendChild(li)
}
