"use strict";

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showMeInfoHuman() {
    console.log(`Name ${this.name}, age ${this.age}`);
  }
}

class Automobile {
  constructor(model, name, year, number) {
    this.model = model;
    this.name = name;
    this.year = year;
    this.number = number;
    this.owner = null;
  }
  addOwner(owner) {
    if (owner.age > 18) {
      this.owner = owner;
      console.log(`Succecful your age > 18.`);
    } else {
      console.log(`Not complited, your age < 18.`);
    }
  }
  showInfoAtCarAndOwner() {
    console.log(  `Car: ${this.model}, ${this.name}, ${this.year}, ${this.number}`
    );
    if (this.owner) {
      console.log(`Owner information`);
      this.owner.showInfoAtCarAndOwner();
    } else {
      console.log(`Owner in not defined`);
    }
  }
}

const Egor = new Human("Egor", 20);

const Nikita = new Human("Nikita", 20);

const Max = new Human("Max", 17);

const Automobile1 = new Automobile("Logan", "Reno", "2000", 2456);
const Automobile2 = new Automobile("Honda", "Dio", "2012", 2756);
const Automobile3 = new Automobile("Toyota", "Tucson", "2009", 2896);

Automobile1.addOwner(Nikita);
console.log(Automobile1);

Automobile2.addOwner(Egor);
console.log(Automobile2);

Automobile3.addOwner(Max);
console.log(Automobile3);

