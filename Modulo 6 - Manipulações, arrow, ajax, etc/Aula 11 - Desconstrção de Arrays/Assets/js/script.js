let info = ['Fulano Beltrano','Fulano','Beltrano'];

//para desconstruir o Array é necessario obter os dados em sequencia, porém é possivel pular o item, deixando apenas um espaço no lugar do nome da variavel
let [nomeCompleto, , sobrenome] = info;

console.log(nomeCompleto, sobrenome);

//Essa forma de descontrução serve muito mais pra setar varios valores iniciais de uma vez
//também é possivel criar valores default.
let [nome, sobrenome2] = ['Bonieky', 'Lacerda'];

//outra forma de descontruir um array
function criar() {
    return[1,2,3]
}

let [a,b,c] = criar();

console.log(a,b,c);