const normalPerson = {
    firstName: 'Rijon',
    lastName: 'Mia',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Mohosin',
    lastName: 'Islam',
    salary: 25000,
}
const friendlyPerson = {
    firstName: 'Titu',
    lastName: 'Islam',
    salary: 26000,
}

// normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 1000, 100, 10);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [900, 90, 10]);
console.log(heroPerson.salary);