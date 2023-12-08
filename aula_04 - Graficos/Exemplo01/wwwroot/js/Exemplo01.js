//dados para o gráfico
var data = {
    //rotulos do grafico
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //Propriedades do gráfico
    datasets: [{
        label: 'Vendas 2023',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [3, 25, 15, 19, 16, 27]
    },
    {
        label: 'Vendas 2022',
        backgroundColor: 'rgba(131, 111, 255)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [8, 10, 7, 3, 11, 4]
    },
    {
        label: 'Vendas 2021',
        backgroundColor: 'rgba(238, 130, 238)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [9, 15, 7, 5, 12, 6]
    },
    {
        label: 'Vendas 2020',
        backgroundColor: 'rgba(100, 149, 237)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [1, 6, 18, 12, 20, 21]
    },
    {
        label: 'Vendas 2019',
        backgroundColor: 'rgba(218, 165, 32)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [7, 9, 6, 2, 10, 3]
    }
]
};

//configurações do grafico
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

//Criar o grafico de barras
var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});