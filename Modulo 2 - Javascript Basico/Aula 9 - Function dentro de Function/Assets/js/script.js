function addSquare(a,b){

    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(addSquare(2, 5));