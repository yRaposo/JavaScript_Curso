let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

console.log(fruits.sort());

console.log(fruits.reverse());

let cars = [
    { marca: 'Fiat', modelo: 'Uno', ano: 2010},
    { marca: 'Ferrari', modelo: 'Portofino', ano: 2020},
    { marca: 'Ford', modelo: 'Escort', ano: 1998},
    { marca: 'Lamborgni', modelo: 'Coutachi', ano: 2015}
];

// O sort reorganiza os dados com base no sinal, caso seja positivo, o dado sóbe, caso negativo, o dado desce.

console.log(cars.sort((a, b) => a.ano - b.ano
));