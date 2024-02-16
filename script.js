"use strict";

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
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
    console.log(
      `Car: ${this.model}, ${this.name}, ${this.year}, ${this.number}`)
    if (this.owner) {
      console.log(`Owner information`);
      this.owner.show();
    } else {
      console.log(`Owner in not defined .`);
    }
  }
}

const egor = new Human("Egor", 20);

const nikita = new Human("Nikita", 20);

const max = new Human("Max", 17);

const automobile1 = new Automobile("Logan", "Reno", "2000", 2456);
const automobile2 = new Automobile("Honda", "Dio", "2012", 2756);
const automobile3 = new Automobile("Toyota", "Tucson", "2009", 2896);

automobile1.addOwner(nikita);
console.log(automobile1);

automobile2.addOwner(egor);
console.log(automobile2);

automobile3.addOwner(max);
console.log(automobile3);

automobile2.showInfoAtCarAndOwner();
automobile1.showInfoAtCarAndOwner();
automobile3.showInfoAtCarAndOwner();