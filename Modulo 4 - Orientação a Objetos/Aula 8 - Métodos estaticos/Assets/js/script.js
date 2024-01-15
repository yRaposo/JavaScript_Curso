class Person {
    static hands = 2;
    age = 0;

    constructor(name){
        this.name = name;
    }
}

let p1 = new Person("Fulano");
console.log(`${p1.name} tem ${Person.hands} mãos`);