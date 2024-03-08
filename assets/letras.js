const elemento = document.querySelector('#texto');
const texto = 'Desenvolvedor Front-End';
const interval = 150;

function showText(elemento, texto, interval) {
    const char = texto.split('').reverse();
    const typer = setInterval(() =>{
        if(!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();
        elemento.innerHTML += next;

    },interval) 
}

showText(elemento, texto, interval);