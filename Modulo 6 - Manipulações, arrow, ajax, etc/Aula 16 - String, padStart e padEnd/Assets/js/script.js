let num = '12345'

//O padEnd completa a string, até ter um determinado numero de caracteres
console.log(num.padEnd(9, '-'));

//O padStart faz a mesma coisa, mas só que no começo
console.log(num.padEnd(9, '-'));

//Exemplo de uso
let cartao = '1234123412341234'

let ultimosDigitos = cartao.slice(-4);

let cartaoMascarado = ultimosDigitos.padStart(16, '-');

console.log('Este é o seu Cartão' + cartaoMascarado);

//é possivel usar as funções pad, para ocultar dados