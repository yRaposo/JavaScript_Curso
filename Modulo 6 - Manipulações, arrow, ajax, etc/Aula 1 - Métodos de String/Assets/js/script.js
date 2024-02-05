let nome = 'Fulano Cicrano Beltrano'

//mostra a quantidade de caracteres na string
let resultado = nome.length
console.log(resultado);

//Encontra uma palavra, caso encontre retornara a posição incial da palavra, se não, restorna -1
resultado = nome.indexOf('Cicrano')
console.log(resultado);

resultado = nome.indexOf('Mauricio')
console.log(resultado);

//Obtem o texto escrito em um determinado trecho, ou apartir de um determinado ponto
resultado = nome.slice(2, -20);
console.log(resultado);

//Obtem o texto escrito em um determinado trecho, ou apartir de um determinado ponto, porém não permite valores negativos
resultado = nome.substring(0,10);
console.log(resultado);

//Obtem o texto escrito em um determinado trecho, ou apartir de um determinado ponto, porém seu primeiro valor define o ponto inicial, enquanto o segundo, define a quantidade de caracteres que serão obtidos
resultado = nome.substr(10, 10);
console.log(resultado);

//procura por uma palavra, e substitui por outra
resultado = nome.replace('Cicrano', 'Platão');
console.log(resultado);

//Deixa todo valor em caixa alta
resultado = nome.toUpperCase();
console.log(resultado);

//Concatena multiplos valores
resultado = nome.concat(' ' + 'Platão');
console.log(resultado);

//tira os espaços desnecesarios
resultado = nome.trim();
console.log(resultado);

//Obtem um caractere de uma string
resultado = nome.charAt(3);
console.log(resultado);

resultado = nome[3];
console.log(resultado);

//divide a string apartir de um determinado caractere, e retorna um array
resultado = nome.split(' ');
console.log(resultado);



