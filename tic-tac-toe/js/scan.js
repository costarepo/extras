export function verification(score) {
    let positions = new Array(0);

    for (let i=1; i<=9; i++) {
        let temp = document.querySelector('td#p' + String(i));
        positions.push(temp);
    }

    // Horizontais
    // Line 1
    if (score.includes('p1') && score.includes('p2') && score.includes('p3')) {

        if (verificaC(0, 1, 2, positions)) {
            return positions[0].textContent;
        }
    }

    // Line 2
    else if (score.includes('p4') && score.includes('p5') && score.includes('p6')) {

        if (verificaC(3, 4, 5, positions)) {
            return positions[3].textContent;
        }
    }

    // Line 3
    else if (score.includes('p7') && score.includes('p8') && score.includes('p9')) {

        if (verificaC(6, 7, 8, positions)) {
            return positions[6].textContent;
        }
    }

    // Verticais
    // Coluna 1

    else if (score.includes('p1') && score.includes('p4') && score.includes('p7')) {

        if (verificaC(0, 3, 6, positions)) {
            return positions[0].textContent;
        }
    }

    // Coluna 2
    else if (score.includes('p2') && score.includes('p5') && score.includes('p8')) {

        if (verificaC(1, 4, 7, positions)) {
            return positions[1].textContent;
        }
    }

    // Coluna 3
    else if (score.includes('p3') && score.includes('p6') && score.includes('p9')) {

        if (verificaC(2, 5, 8, positions)) {
            return positions[2].textContent;
        }
    }

    // Diagonal superior esquerda para direita
    else if (score.includes('p1') && score.includes('p5') && score.includes('p9')) {
        if (0, 4, 8, positions) {
            return positions[0].textContent;
        }
    }

    // Diagonal superior direita para esquerda
    else if (score.includes('p3') && score.includes('p5') && score.includes('p7')) {
        if (verificaC(2, 4, 6, positions)) {
            return positions[2].textContent;
        }
    }
}


function verificaC(a, b, c, positions) {
    return (positions[a].textContent === positions[b].textContent &&
        positions[b].textContent === positions[c].textContent);
}
