"use strict";
//    ES6
// Arrow function
// @ts-ignore
var double = function (value) { return value * 2; };
console.log(double(10));
// Template strings + default arguments
var greet = function (name) {
    if (name === void 0) { name = 'Alex'; }
    console.log("Hello," + name);
};
greet();
greet("Anna");
// spread and rest operators
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var newArray = [55, 20].concat(numbers);
console.log(newArray);
// array destructuring
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// object destructuring
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Alex",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// Classes
// Exercise 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    baseObject.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return baseObject;
}());
var rectangle = new baseObject(5, 2);
console.log(rectangle.calcSize());
function createObject(width, length) {
    return {
        width: width,
        length: length,
        calcSize: function () {
            return this.width * this.length;
        }
    };
}
// Exercise 3
var Person = /** @class */ (function () {
    function Person(name) {
        this.firstName = name;
    }
    Object.defineProperty(Person.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (value) {
            value.length > 3 ? this.firstName = value : this.firstName = "";
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person("John");
console.log(person.firstName);
person._firstName = 'John';
console.log(person.firstName);
var person2 = new Person("Doe");
console.log(person2.firstName);
person2._firstName = 'Doe';
console.log(person2.firstName);
