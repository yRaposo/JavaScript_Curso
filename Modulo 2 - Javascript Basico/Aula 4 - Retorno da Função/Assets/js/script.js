function calcIdade(anoNasc, anoAtual) {
    let idade = anoAtual - anoNasc;

    return(
        `idade: ${idade}`
    );
}

let idade = calcIdade(2004, 2023);

console.log(idade);