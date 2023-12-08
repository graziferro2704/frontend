canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

c = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height / 2;
var quadrado = 50;

Desenhar()

function Desenhar()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillRect(x, y, quadrado, quadrado);

}

document.addEventListener('keydown', (event) => {

    if(event.key === "a" || event.key === "A")
    {
        if(x > 0)
        {
            x -= 10;
            Desenhar();
        }    
    }
    else if(event.key === "d" || event.key === "D")
    {
        if(x + quadrado < canvas.width)
        {
            x += 10;
            Desenhar();    
        }
    }
    else if(event.key === "w" || event.key === "W")
    {
        if(y > 0)
        {
            y -= 10;
            Desenhar();   
        }
       
    }
    else if(event.key === "s" || event.key === "S")
    {
        if(y + quadrado < canvas.height)
        {
            y += 10;
            Desenhar();
        }   
    }
}) 