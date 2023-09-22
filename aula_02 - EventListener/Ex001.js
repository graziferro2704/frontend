const botao1 = document.querySelector('#aumentar');
const botao2 = document.querySelector('#diminuir');
const botao3 = document.querySelector('#zerar');
const contadorElemento = document.querySelector('#contador');

let contador = 0;

function aumentar()
{
    contador++;
    contadorElemento.textContent = contador;
}
function diminuir()
{
    if(contador < 0)
    {
        alert("Contador Zerado")
    }
    else {
        contador--;
        contadorElemento.textContent = contador;
    }
    
}
function zerar()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

botao1.addEventListener('click', aumentar);
botao2.addEventListener('click', diminuir);
botao3.addEventListener('click', zerar);
