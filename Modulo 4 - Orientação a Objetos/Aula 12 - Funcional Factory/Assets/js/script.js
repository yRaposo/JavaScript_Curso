const createPerson = (name, lastName, age) => {
    return {
        name,
        lastName,
        age,

        getFullName() {
            return `${this.name} ${this.lastName}`;
        }
    }
}

let person1 = createPerson('Fulano','Cicrano', 35);
let person2 = createPerson('Beltrano', 'Cicrano', 45);

console.log(person1.name);