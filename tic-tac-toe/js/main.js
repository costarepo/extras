import { verification } from './scan.js';

const score = {
    marcadas: new Array(0),
    state: 'x',
    x: 0,
    o: 0,
    empate: 0
};

const tbody = document.querySelector('tbody');
const button = document.querySelector('section#buttons');

// CLICK
tbody.addEventListener('click', function(event) {
    let pos = document.querySelector('td#' + event.target.id);

    if (pos.style.backgroundColor === "rgb(160, 219, 142)") {
        alert('Posição ja alocada, tente novamente!');
    } else {
        pos.textContent = score.state;
        score.state === 'x'? score.state = 'o': score.state = 'x';
        pos.style.backgroundColor = "rgb(160, 219, 142)";
        score.marcadas.push(pos.id);
    }

    if (verification(score.marcadas) === 'x') {
        const outx = document.querySelector('output#scoreX');
        score.x++;
        outx.textContent = score.x;
        alert('X venceu o jogo!');
    } else if (verification(score.marcadas) === 'o') {
        const outo = document.querySelector('output#scoreO');
        score.o++;
        outo.textContent = score.o;
        alert('O venceu o jogo!');
    } else if (score.marcadas.length === 9) {
        const oute = document.querySelector('output#empates');
        score.empate++;
        oute.textContent = score.empate;
        alert('Empatou!!');
    }
});

button.addEventListener('click', function(event) {
    if (event.target.id === 'reset') {
        location.reload();
    } else if (event.target.id === 'novo') {
        const string = 'tictactoe';
        let cont = 1;

        for (let i of string) {
            let temp = document.querySelector('td#p' + cont);
            temp.style.backgroundColor = 'bisque';
            temp.textContent = i;
            cont++;
            score.state = 'x';
            score.marcadas = new Array(0);
        }
    }
});
