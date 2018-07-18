import { create, rm } from './CRUD.js';

const section = document.querySelector('section');

section.addEventListener('click', function(event) {
    if (event.target.id === 'add') {
        create();
    } else if (event.target.id === 'del') {
        rm();
    }
});
