class Person {

    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} diz Ola`);
    }
}

class Student extends Person {
    constructor(name, id){
        super(name);
        this.id = id;
    }

    sayHello(){
        super.sayHi();
    }
}

let p1 = new Student('Fulano', 1);

console.log(`Nome: ${p1.name} Idade: ${p1.age} Matricula: ${p1.id}`);
