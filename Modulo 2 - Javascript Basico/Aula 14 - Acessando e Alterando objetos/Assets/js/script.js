let Pessoa = {
    nome: 'Fulano',
    sobrenome: 'Cicrano',
    
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(Pessoa.nomeCompleto());
