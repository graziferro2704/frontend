//Selecionando botâo pelo ID
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador');

//Inicializando contador
let contador = 0;

//função que sera chamada pelo eventListener
function contando()
{
    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento de click
botao.addEventListener('click', contando);