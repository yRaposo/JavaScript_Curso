/*

Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Formula da porcentagem: ( y / x ) * 100

*/

function PCalc(total, parte){
    return(
        (parte / total) * 100
    );
}

let x = 30;
let y = 14;

let resultado = PCalc(x, y);

console.log(`${y} de ${x} é ${resultado}%`);