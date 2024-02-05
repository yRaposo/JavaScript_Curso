//Obtem a data atual do dispositivo, e retorna todos od dados da data atual
let d = new Date();
console.log(d);

//Retorna uma data encurtada
console.log(d.toDateString());

//Retorna uma data baseada no fuzo horario de UTC
console.log(d.toUTCString());

//Gera uma data baseada nos parametros
let d2 = new Date(2024, 0, 23, 16, 53);
console.log(d2);

//forma alternativa de gerar uma data
let d3 = new Date('2024-01-23 16:53');
console.log(d3);

//retorna datas em numeros inteiros
let res = d.getFullYear();
console.log(res);

res = d.getMonth();
console.log(res);

res = d.getDay(); //retorna o dia da semana
console.log(res);

res = d.getDate();
console.log(res);

res = d.getTime(); //retorna os milisegundos apartir de 1 janeiro de 1970
console.log(res);

res = d.getMinutes();
console.log(res);

res = d.getHours();
console.log(res);

res = d.getSeconds();
console.log(res);

res = d.getMilliseconds();
console.log(res);

//Obtem os milisegundos apartir de 1 de janeiro de 1970
console.log(Date.now());

//Modifica uma parte especifica da data
d.setDate(d.getDate() + 90 )
res = d
console.log(res);

d.setMonth(5)
res = d
console.log(res);