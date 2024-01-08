function calcIdade(anoNasc, anoAtual) {
    let idade = anoAtual - anoNasc;

    return(
        idade
    );

    // if (idade < 18) {
    //     return (
    //         "é Menor de idade"
    //     );
    // } else if (idade >= 18 || idade < 60) {
    //     return (
    //         "é Maior de idade"
    //     );
    // } else if (idade >= 60) {
    //     return(
    //         "é um idoso"
    //     );
    // }


}

let idade = calcIdade(2012, 2023);

console.log(idade);