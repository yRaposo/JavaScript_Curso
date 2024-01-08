/*

Calcule o preço do imóvel
- o metro quadrado (m2) = 3.000
- Se tiver 1 quartos o m2 é 1x
- Se tiver 2 quartos o m2 é 1.2x
- se tiver 3 quartos o m2 é 1.5x
*/

let m2 = 123;
let quartos = 3;
let precoM2 = 3000;

function calcImovel(metroQ, quartos) {
    if (quartos == 1) {
        return metroQ * precoM2
    } else if (quartos == 2) {
        return metroQ * precoM2 * 1.2
    } else {
        return metroQ * precoM2 * 1.5
    };
}

let preco = calcImovel(m2, quartos);

console.log(`O imóvel custa R$${preco}`);