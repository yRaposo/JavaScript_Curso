let profession = "Policial";

console.log("Progissão: " + profession);

switch (profession) {
    case 'Ambulancia':
        console.log("Sua camisa é branca");
        break;
    case 'Bombeiro':
        console.log("Sua camisa é vermelha");
        break;
    case 'Policial':
        console.log("Sua camisa é azul");
        break;
    default:
        console.log("Não tem camiseta");
        break;
}