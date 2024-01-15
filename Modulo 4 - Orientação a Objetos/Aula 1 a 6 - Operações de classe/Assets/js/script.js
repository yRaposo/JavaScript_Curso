class Person {

    steps = 0;
    _age = 0;

    constructor(name) {
        this.name = name;
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++;
    };

    get age(){
        return this._age;
    }

    set age(x){
        if (typeof x == 'number') {
            this._age = x;
        } else {
            console.error('apenas numeros');
        }
    }

    get fullName(){
        return `${this.name} ${this.lastName}`;
    }
}


let p1 = new Person('Fulano', 20);
let p2 = new Person('Cicrano', 30);
let p3 = new Person('Beltrano', 40);

p1.takeAStep();
console.log(p1.steps);
