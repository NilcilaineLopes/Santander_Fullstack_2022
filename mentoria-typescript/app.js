"use strict";
let button1 = document.getElementById('button');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2
}

if (button1) {
    button1.addEventListener('click', () => {
        if(input3 && input4){
            adicionarNumeros(Number(input3.value), Number(input4.value))
        }
    })
}