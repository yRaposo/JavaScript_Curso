let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 8]

console.log(outros);

let info = {
    nome: 'Fulano',
    sobrenome: 'Beltrano',
    idade: 99
}

let novaInfo = {
    ...info,
    cidade: 'São Paulo',
    estado: 'SP',
    Pais: 'Br'
};

console.log(novaInfo);

function addInfo(info) {
    let novasInfo2 = {
        ...info,
        cidade: 'São Paulo',
        estado: 'SP',
        Pais: 'Br'
    };

    return novaInfo2;
}

console.log(addInfo(info));
//O spread serve para criar um objeto semelhante a outro, mas adicionar mais coisas, que no caso é apenas os 3 pontos ...

