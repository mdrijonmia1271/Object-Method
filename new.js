class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Rijon', 'Mia', 25000);
console.log(heroPerson);
const friendlyPerson = new Person('Mohosin', 'Islam', 20000);
console.log(friendlyPerson);

function person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new person1('Titu', 'Islam', 1200);
console.log(oldPerson);