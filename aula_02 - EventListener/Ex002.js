const paisSelecionado = document.querySelector("#paisSelecionado");
const infoPais = document.querySelector("#infoPais");

const informacoesPaises = {
    brasil:{
            nome: 'Brasil',
            capital: 'Brasilia',
            populacao: '219 Milhões',
            idioma: 'Português'
    },
    eua:{
            nome: 'Estados Unidos',
            capital: 'Whashington, D.C',
            populacao: '331 Milhões',
            idioma: 'Inglês'
    },
    canada:{
            nome: 'Canadá',
            capital: 'Ottawa',
            populacao: '37 Milhões',
            idioma: 'Inglês e Francês'
    },
    franca:{
            nome: 'França',
            capital: 'Paris',
            populacao: '126 Milhões',
            idioma: 'Francês'
    },
    japao:{
            nome: 'Japão',
            capital: 'Tóquio',
            populacao: '126 Milhões',
            idioma: 'Japonês'
    }
};

function atualizarInformacoesPais()
{
    const paisSelecionadoValue = paisSelecionado.value;
    const paisInfo = informacoesPaises[paisSelecionadoValue];


    infoPais.textContent = `País: ${paisInfo.nome}, Capital: ${paisInfo.capital}, 
    População: ${paisInfo.populacao} e Idioma: ${paisInfo.idioma}`;

}

paisSelecionado.addEventListener('change', atualizarInformacoesPais);