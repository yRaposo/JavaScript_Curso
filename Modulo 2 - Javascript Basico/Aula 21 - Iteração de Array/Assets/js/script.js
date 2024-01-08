let word = [
    'Anticonstitucionalissimamente',
    'Otorrinolaringologista',
    'Pneumoultramicroscopicossilicovulcanoconiótico',
    'Eletroencefalografista',
    'Inconstitucionalissimamente'
];

//Filtro
let bigerWord = word.filter((item) => item.length > 22);
let tineWord = word.filter((item) => item.length <= 22)

console.log(bigerWord);
console.log(tineWord);

//Every e Some
//exemplo 1
let todos = word.every((value) => value.length > 22);
let alguns = word.some((value) => value.length > 22);

if (todos) {
    console.log('Todos os itens tem mais de 22 letras');
} else if (alguns) {
    console.log('Alguns itens tem mais de 22 letras');
} else {
    console.log('Nenhum item tem mais de 22 letras');
};

//exempo 2
let todos2 = tineWord.every((value) => value.length > 22);
let alguns2 = tineWord.some((value) => value.length > 22);

if (todos2) {
    console.log('Todos os itens tem mais de 22 letras');
} else if (alguns2) {
    console.log('Alguns itens tem mais de 22 letras');
} else {
    console.log('Nenhum item tem mais de 22 letras');
};

//Includes
if (word.includes('Ornitorrinco')) {
    console.log('essa palvra esta incluida')
} else {
    console.log('essa palvra nãos esta incluida')
}