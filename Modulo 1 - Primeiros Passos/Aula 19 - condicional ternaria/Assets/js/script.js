let isMember = true;

let shipping = ((isMember) ? 2 : 10);

console.log((isMember) ? "Você é membro" : "Você não é membro");
console.log("Frete: R$" + shipping);

let idade = 90;
let isAdult = ((idade >= 18 && idade < 60) ? true : false);

console.log(isAdult ? "Sim, é um adulto" : "Não, não é um adulto");