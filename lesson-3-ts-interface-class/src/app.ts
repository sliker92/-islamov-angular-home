//    ES6

// Arrow function
// @ts-ignore
const double = value => value * 2;
console.log(double(10));

// Template strings + default arguments
const greet = function (name = 'Alex') {
  console.log(`Hello,${name}`);
};
greet();
greet("Anna");

// spread and rest operators
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

const newArray = [55, 20, ...numbers];
console.log(newArray);

// array destructuring
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// object destructuring
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);

//   Types

interface Bank {
  money: number;
  deposit(value: number): void;
}

let bankAccount: Bank = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: Bank; hobbies: string[] } = {
  name: "Alex",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// Classes

// Exercise 1
class Car {
  name: string;
  acceleration: number;

  constructor(name: string) {
    this.name = name;
    this.acceleration = 0;
  }

  honk() {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class baseObject {
  width: number;
  length: number;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  calcSize(): number {
    return this.width * this.length;
  }

}

const rectangle = new baseObject(5, 2);
console.log(rectangle.calcSize());

// Alternative createObject
interface baseObject {
  width: number;
  length: number;
  calcSize(): void;
}

function createObject(width: number, length: number): baseObject {
  return {
    width,
    length,
    calcSize(): number {
      return this.width * this.length;
    }
  }
}

// Exercise 3

class Person {
  firstName: string;

  constructor(name: string) {
    this.firstName = name;
  }

  set _firstName(value: string) {
    value.length > 3 ? this.firstName = value : this.firstName = "";
  }

  get _firstName() {
    return this.firstName;
  }
}

const person = new Person("John");
console.log(person.firstName);
person._firstName = 'John';
console.log(person.firstName);

const person2 = new Person("Doe");
console.log(person2.firstName);
person2._firstName = 'Doe';
console.log(person2.firstName);