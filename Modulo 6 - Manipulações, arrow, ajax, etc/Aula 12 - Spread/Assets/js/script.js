//O Rest, serve para quando não se sabe a quantidade de valores que serão recebidas
function addNomes(nomes, ...novosNomes){

    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto
}

let nomes = ['Fulano', 'Baltrano'];

let outros = adicionar(nomes, "Antonio", "Maria", "José");

console.log(outros);
