let pessoa = {
    nome: 'Fulano',
    sobrenome:'Beltrano',
    idade: 90,
    social:{
        instagram:'Fu14n0',
        twitter: 'Fu14n0',
        reddit: {
            nome: 'Fu14n0',
            seguidores: 1000
        } 
    },
    
    nomeCompleto: () => {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// desconstrução Antiga
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;


// descontrução nova
//mudar o nome da variavel = <Nome antigo>:<novo nome>
//definir um valor padrão = <atributo> = <valor default>
//atributos de objetos internos 1, <nome do objeto>:{<nome do atributo>}
let {nome:pessoaNome, sobrenome:pessoaSobrenome, idade:pessoaIdade = 0, social:{ twitter }} = pessoa;

//atributos de objetos internos 2
let {instagram} = pessoa.social;

//atributos de objetos internos 3
let {social:{ reddit:{nome:reddit}}} = pessoa;

console.log(nome, sobrenome, idade, reddit);