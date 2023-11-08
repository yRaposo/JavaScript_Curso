// ==: condição ignora a tipagem do dado

let idade = "20";

if (idade == 20){
    console.log(`Você tem ${idade} anos`);
}

// ===: codição precisa da tipagem exata do dado

if (idade === 20){
    console.log(`Você tem ${idade} anos`);
} else {
    console.log("nenhum numero encontrado");
}