/*-------const num: number, const name: string, const isMale: boolean -------*/

function add(n1: number, n2: number, showBoolean: boolean, showString: string) {
  if (showBoolean) {
    console.log(showString);
    return n1 + n2;
  } else console.log(n1 + n2);
}

function addJS(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Invalid inputs!");
  }
  return n1 + n2;
}

const num1 = "5";
const num2 = 2.8;
const showBoolean = true;
const showString = "Hello";

const result = add(+num1, num2, showBoolean, showString);
const resultJS = addJS(5, 7);
console.log(result);
console.log(resultJS);

/*-------const person: object | {} = object -------*/

// const person: object = {
//     name: 'Abdullah',
//     age: 24
// }

// const person: {} = {
//     name: 'Abdullah',
//     age: 24
// }

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Abdullah",
//   age: 24,
// };

const person = {
  name: "Abdullah",
  age: 24,
};

console.log(person.name, person.age);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);

/*------- const persons: string[], const persons: number[], const persons: any[] = array -------*/

const personObj = {
  name: "Abdullah",
  age: 24,
  hobbies: ["Coding", "Sports"],
};

console.log(personObj);

let favActivities: string[];
favActivities = ["Sports"];

for (const hobby of personObj.hobbies) {
  console.log(hobby);
}

/*------- const persons: [number, string],= tuple -------*/

const person1: {
  name: string;
  age: number;
  role: [string, number, string, number];
} = {
  name: "Abdullah",
  age: 24,
  role: ["admin", 1, "customer", 2],
};

// getting error
// person1.role = [1, "admin", 2, "customer"]

//getting error
// person1.role = ["admin", 1, "customer", 2, 'user']

//It works
// person1.role.push('user')

/*------- enum -------*/

enum Role {
  "Admin", //0
  "User", //1
  "Author", //2
}

enum Role1 {
  "Admin" = 5,
  "User" = 6,
  "Author",
}
const person2 = {
  name: "Abdullah",
  age: 24,
  role: Role1.Author, // 7
};

console.log(person2);

/*------- any -------*/

let mixedArray: any[];
mixedArray = ["mixed", 2, true];

let nameAny: any;
nameAny = 5;
nameAny = "Abdul";

console.log(mixedArray);
console.log(nameAny);

/*------- union -------*/
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") result = n1 + n2;
  else result = n1.toString() + n2.toString();
  return result;
}

console.log(combine("Max", 2));
console.log(combine(2, 2));

/*------- literal type -------*/
function combineLiteral(
  n1: number | string,
  n2: number | string,
  litral: "as-number" | "as-text"
) {
  let result;
  if (litral === "as-number") {
    if (typeof n1 === "number" && typeof n2 === "number")
      return (result = n1 + n2);
  } else if (litral === "as-text") {
    if (typeof n1 === "string" && typeof n2 === "string")
      return (result = n1 + n2);
  } else return null;
}

console.log(combineLiteral("Max", "2", "as-text"));
console.log(combineLiteral(2, 2, "as-number"));

/*------- type aliases -------*/

type Combined = number | string;
type ConversinDesc = "as-number" | "as-text";
function combineAlises(n1: Combined, n2: Combined, litral: ConversinDesc) {
  let result;
  if (litral === "as-number") {
    if (typeof n1 === "number" && typeof n2 === "number")
      return (result = n1 + n2);
  } else if (litral === "as-text") {
    if (typeof n1 === "string" && typeof n2 === "string")
      return (result = n1 + n2);
  } else return null;
}

console.log(combineAlises("Max", "2", "as-text"));
console.log(combineAlises(2, 2, "as-number"));

/*------- function return type -------*/

function addFunc(n1: number, n2: number) {
  return n1 + n2;
}

// function addFunc(n1: number, n2: number): number {
//   return n1 + n2;
// }

function printResultFunc(num: number) {
  console.log("Result: " + num);
}

// function printResultFunc(num: number): void {
//   console.log("Result: " + num);
// }

console.log("Return type is number by default: " + addFunc(1, 2));
console.log("Return type is void by default: ", printResultFunc(5));

/*------- Function type -------*/

let combineFunc: Function;

// getting error
// combineFunc = 5

combineFunc = addFunc;
console.log(combineFunc(6, 2));

let combineFuncPrime: (a: number, b: number) => number;
combineFuncPrime = addFunc;
console.log(combineFuncPrime(6, 2));

/*------- Function types  callbacks -------*/

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 7, (result) => {
  console.log(result);
});

/*------- unknown type -------*/
let userName: string;
let userInput: unknown;
userInput = 9;
userInput = "Abdul";

// Type 'unknown' is not assignable to type 'string'.
// userName = userInput;

let userName1: string;
let userInput1: any;
userInput1 = 9;
userInput1 = "Abdul";

// error goes away
userName1 = userInput1;

/*------- never type -------*/

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const res = generateError("An error occurred!", 500);
console.log(res);
