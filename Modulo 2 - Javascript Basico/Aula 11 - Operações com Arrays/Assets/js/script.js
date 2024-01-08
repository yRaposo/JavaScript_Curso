//1. No array abaixo, qual o numero que retorna a ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];

let x = 1;
console.log('1.', carros[x]);

//2. Troque a ferrari por um Audi
console.log('2. Lista com Audi');

carros[x] = 'Audi';

console.log(carros);

//3. Adicione o Volvo a Lista
console.log('3. Lista com Volvo:');

carros.push('Volvo');

console.log(carros);

//4. Exiba quantos itens te no Array
console.log('4. itens no array')
console.log(`Existem ${carros.length} carros dentro desta lista`);