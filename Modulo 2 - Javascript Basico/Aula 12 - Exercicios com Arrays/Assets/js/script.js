let ingredientes = [
    'fermento',
    'farinha',
    'ovo',
    'açucar'
];

console.log(`Total de ingredientes: ${ingredientes.length}`);

//forma errada
ingredientes[4] = 'cebola',

//forma correta
ingredientes.push('laranja');

console.log(ingredientes);


//remove o ultimo
ingredientes.pop();

//remove o primeiro
ingredientes.shift();

console.log(ingredientes)