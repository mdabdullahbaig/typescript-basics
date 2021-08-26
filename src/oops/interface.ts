console.log("-----Interface-----");

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// This also works
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

let user: Person;

user = {
  name: "Abdul",
  age: 23,
  greet(pharase: string) {
    console.log(pharase + " " + this.name);
  },
};

user.greet("Hi there I am");

/*----------------------------------------------*/
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Greet implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(pharase: string) {
    console.log(`${pharase} I am ${this.name} and I am ${this.age} years old`);
  }
}

const greetObj = new Greet("Abdul", 24);
greetObj.greet("Hi there");

/*----------------------------------------------*/
interface Named {
  readonly name: string;
}

interface Greetable1 extends Named {
  greet(pharase: string): void;
}

class GreetName implements Greetable1 {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  greet(pharase: string) {
    console.log(pharase + " " + this.name);
  }
}

new GreetName("Abdul").greet("Hi there is");
