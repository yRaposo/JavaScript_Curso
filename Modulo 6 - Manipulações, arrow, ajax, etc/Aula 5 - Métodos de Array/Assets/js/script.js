let list = ['Ovo', 'Farinha', 'Fermento', Açucar];


//converte o array em uma string
let res = list.toString();
console.log(res);

//converte o array em uma string, separando os valores com um determinado caractere
res = list.join(' ');
console.log(res);

//Procura dentro do array em qual posição esta a string, caso não encontre, retorna -1
res = list.indexOf('Farinha');
console.log(res);

res = list.indexOf('Farminha');
console.log(res);

//Deleta o valor e o slot de um array
res = list.splice(1,2);
console.log(res);

//Junta dois arrays
let list2 = ['Batedeira, Forma, Forno'];
res = list.concat(list2);
console.log(res);

//ordena o arry em ordem alfabética
res = list.sort();
console.log(res);

//Inverte a ordem do array
res = list.reverse();
console.log(res);

//A cada item dentro do array, o sistema ira execultar uma função
res = list.map( () => {
    return 'Ingrdiente: ' + item;   
});
console.log(res);

//Filtra os items de um array
let n = [10, 20, 30 , 40, 50, 60, 70];
res = n.filter((item) => {
    return (item > 20)? true : false;
});
console.log(res);

//Verifica se todos os items do array cumprem uma condição
res = n.every((item) => {
    return (item > 20)? true : false;
});
console.log(res);

//Verifica se algus dos items do array que cumprem uma condição
res = n.some((item) => {
    return (item > 20)? true : false;
});
console.log(res);

//Procura itens que cumpra uma determinada condição
res = list.find((item) => {
    return (item === 'Ovo')? true : false;
});

//Retorna a posição dentro de um array
res = list.findIndex((item) => {
    return (item === 'Farinha')? true : false;
})