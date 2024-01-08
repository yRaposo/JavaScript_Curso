let carros = ['ferrari', 'mercedes', 'lamborgni', 'uno','brasilia','fusca'];

//forma padrão de FOR
for(let n = 0; n < carros.length; n++){
    console.log(carros[n]);
}

console.log('---/---');

//forma alternativa para trabalhar com arrays
for(let n in carros){
    console.log(carros[n]);
}

console.log('---/---');

//segunda forma alternativa para trabalhar com array
for(let carro of carros){
    console.log(carro);
}