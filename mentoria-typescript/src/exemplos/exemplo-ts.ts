let button2 = document.getElementById('button');
let input5 = document.getElementById('input3') as HTMLInputElement;
let input6 = document.getElementById('input4') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar){
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devePrintar = true;
let frase: string;
frase = 'O valor é: '

if (button2) {
    button2.addEventListener('click', () => {
        if(input5 && input6){
            adicionarNumeros(Number(input5.value), Number(input6.value))
        }
    })
}