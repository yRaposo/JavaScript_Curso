//variaveis
let nome = 'Everson'

//Array
let nomes = ['Fulano', 'Cicrano']

//Objeto
let Persongem = {
    nome: 'Raposo',
    idade: 20,
    pais: 'Brasil',
    facções: [
        'Guilda dos Magos',
        'Vastaya',
        'Alterra',
        'Ordo teoritas'
    ],
    atributos: {
        força: 15,
        magia: 20,
        vigor: 5
    }
}

console.log(`${Persongem.nome} tem ${Persongem.idade} anos de idade`);
console.log(Persongem.atributos.magia);
console.log(Persongem.facções[1]);