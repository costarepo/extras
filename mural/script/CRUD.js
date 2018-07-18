export function create() {

    const input = document.querySelector('textarea');
    const title = document.querySelector('input');
    const tbody = document.querySelector('tbody#pai');

    // Criando nova tabela
    let newTable = document.createElement('table');
    newTable.id = title.value;
    newTable.classList.add('item');

    // Criando um titulo para ela
    let newtHead = document.createElement('thead');

    let newTh = document.createElement('th');
    newTh.textContent = title.value;

    newtHead.appendChild(newTh);

    // Criando o corpo da tabela
    let newTbody = document.createElement('tbody');

    let newTr = document.createElement('tr');

    let newTd = document.createElement('td');

    let label = document.createElement('label');
    label.for = input.value;

    let br = document.createElement('br');

    let newOutput = document.createElement('output');
    newOutput.id = title.value;
    newOutput.textContent = input.value;

    let newInput = document.createElement('input');
    newInput.type = 'checkbox';

    newTd.appendChild(label);
    newTd.appendChild(br);
    newTd.appendChild(newOutput);
    newTd.appendChild(newInput);

    newTr.appendChild(newTd);
    newTbody.appendChild(newTr);
    newTable.appendChild(newtHead);
    newTable.appendChild(newTbody);

    tbody.appendChild(newTable);
}

export function rm() {
    const vetor = document.querySelectorAll('td');

    for (let i of vetor) {
        if (i.lastChild.checked) {
            if (confirm('Excluir Selecionados?')) {
                i.parentElement.parentElement.parentElement.remove();
            }
        }
    }
}
