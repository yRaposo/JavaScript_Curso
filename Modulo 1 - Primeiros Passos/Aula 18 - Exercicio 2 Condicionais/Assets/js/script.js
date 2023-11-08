//Substitua o @ pela condicional correta para que o resultado seja TRUE

/*
let x = 10;
let y = 5;

console.log(x @ y); 
*/

let x = 10;
let y = 5;

console.log(x > y);

//Substitua o @ pela condicional correta para que o resultado seja FALSE

/*
let w = "10";
let z = 10;

console.log(w @ z);
*/

let w = "10";
let z = 10;

console.log(w === z);

// Substitua o @ plea condicional correta para que o resultado seja TRUE

/*
let a = 10;
let b = 5;
console.log(b @ y);
*/

let a = 10;
let b = 5;

console.log(x != y);

// Crie uma condicional para verificar se o preço da carne está barato ou caro.
//PS: o preço é 40.3, esta barato até 45

let preco = 40.3;

if (preco <= 45) {
    console.log(`A carne esta barata, custando apenas R$${preco}`);
} else {
    console.log(`A carne esta cara, custando R$${preco}`);
}