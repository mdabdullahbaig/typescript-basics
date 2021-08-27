"use strict";
console.log("-----Interface-----");
// This also works
// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };
let user;
user = {
    name: "Abdul",
    age: 23,
    greet(pharase) {
        console.log(pharase + " " + this.name);
    },
};
user.greet("Hi there I am");
class Greet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(pharase) {
        console.log(`${pharase} I am ${this.name} and I am ${this.age} years old`);
    }
}
const greetObj = new Greet("Abdul", 24);
greetObj.greet("Hi there");
class GreetName {
    constructor(n, 
    // optional parameter
    age) {
        this.name = n;
    }
    greet(pharase) {
        console.log(pharase + " " + this.name);
    }
}
new GreetName("Abdul").greet("Hi there is");
