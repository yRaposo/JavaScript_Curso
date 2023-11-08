let idade = "20";

if (idade < 18) {
    console.log(`Você é um menor de idade, com ${idade} anos de idade`);
} else if (idade >= 18 && idade < 60) {
    console.log(`Você é um adulto, com ${idade} anos de idade`);
} else if (idade >= 60) {
    console.log(`Você é um velho(a), com ${idade} anos de idade`);
}