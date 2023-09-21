var barraProgresso = document.querySelector(".progress");
//Esconde a barra de progresso
barraProgresso.computedStyleMap.display = "none";

function botaoEnviar() {

    var nome = document.querySelector("#inputNome").value;
    var idade = parseInt(document.querySelector("#inputIdade").value);
    var cidade = document.querySelector("#inputCidade").value;

    var validaCampos = validar(nome, idade, cidade);
    if (validaCampos == true)
    {
        return;
    }

    //Mostra a barra de progresso
    barraProgresso.style.display = "block"
    mostrarBarra(nome, idade, cidade)

}

function validar(nome, idade, cidade) {
    if( nome == "" || idade == "" || cidade == "") 
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger fade show">
            <span> Preencha todos os campos </span>
                <button type="button" class="close" data-bs-dismiss="alert">
                    <span aria-hidden="true"> &times; </span>
                </button>
        </div>`;
        return true;
    } 

    else {
        return validarIdade(idade);
        
    }
}

function validarIdade(idade)
{
    if(idade < 0 || idade > 150 )
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger fade show">
            <span> Preencha todos os campos </span>
                <button type="button" class="close" data-bs-dismiss="alert">
                    <span aria-hidden="true"> &times; </span>
                </button>
        </div>`;
        return true;
    }
    else {
        return false;
    }
}

function mostrarBarra(nome, idade, cidade)
{
    var progress = 0;
    var barra = document.querySelector(".progress-bar");
    var intervalo = setInterval(function() {
        if(progress > 100)
        {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";

            document.querySelector("#resultado").innerHTML = `
            <div class="alert alert-danger fade show">
                <span> ${nome} ${idade} ${cidade} </span>
                    <button type="button" class="close" data-bs-dismiss="alert">
                        <span aria-hidden="true"> &times; </span>
                    </button>
            </div>`
        }
        else {
            progress++;
            barra.style.width = progress + "%"
        }
    }, 50);
}