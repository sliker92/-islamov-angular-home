interface IPerson {
  firstName: string;
  lastName?: string;
  hobbies?: string[];
  greet(lastName: string): void;
}

function greet(person:IPerson) {
  console.log(`Hello,${person.firstName}`);
}

function changeName(person:IPerson) {
  person.firstName = "Anna";
}

const person: IPerson = {
  firstName: "John",
  hobbies: ["Cooking", "Sports"],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
};

changeName(person);
greet(person);
person.greet("Anything");

class Person implements IPerson {
  firstName: string = '';

  greet(lastName: string): void {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  };
}

const myPerson:IPerson = new Person();
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
