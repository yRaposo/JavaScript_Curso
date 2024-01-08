// fução classica
function somar(x, y) {
    return x + y;
};

// arrow function
const somarA = (x, y) => {
    return x + y;
};

// arrow function reduzida
const somarB = (x, y) => x + y;

// arrow function super reduzida
const somar15 = x => x + 15;

console.log(somar(10, 15), somarA(10, 15), somarB(10, 15), somar15(10));