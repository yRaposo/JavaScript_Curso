//As funções Object mostram as caracteristicas de um array ou Objeto
let lista = ['Valorant', 'CS2', 'RDR2', 'Cyberpunk', 'OW2', 'Lies of P'];

//a Função object.keys mostra os ids
console.log( Object.keys(lista) );

//a Função object.values mostra seus valores
console.log( Object.values(lista) );

//a Função object.entries mostra todas as suas caracteristicas
console.log( Object.entries(lista) );


//Mesmo sendo um Objeto, a função ira retornar apenas um array
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'Beltrano',
    idade: 30
};

console.log( Object.keys(pessoa) );

console.log( Object.values(pessoa) );

console.log( Object.entries(pessoa) );