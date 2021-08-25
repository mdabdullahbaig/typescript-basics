/*-------const num: number, const name: string, const isMale: boolean -------*/
function add(n1, n2, showBoolean, showString) {
    if (showBoolean) {
        console.log(showString);
        return n1 + n2;
    }
    else
        console.log(n1 + n2);
}
function addJS(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Invalid inputs!");
    }
    return n1 + n2;
}
var num1 = "5";
var num2 = 2.8;
var showBoolean = true;
var showString = "Hello";
var result = add(+num1, num2, showBoolean, showString);
var resultJS = addJS(5, 7);
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
var person = {
    name: "Abdullah",
    age: 24
};
console.log(person.name, person.age);
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    }
};
console.log(product);
/*------- const persons: string[], const persons: number[], const persons: any[] = array -------*/
var personObj = {
    name: "Abdullah",
    age: 24,
    hobbies: ["Coding", "Sports"]
};
console.log(personObj);
var favActivities;
favActivities = ["Sports"];
for (var _i = 0, _a = personObj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
/*------- const persons: [number, string],= tuple -------*/
var person1 = {
    name: "Abdullah",
    age: 24,
    role: ["admin", 1, "customer", 2]
};
// getting error
// person1.role = [1, "admin", 2, "customer"]
//getting error
// person1.role = ["admin", 1, "customer", 2, 'user']
//It works
// person1.role.push('user')
/*------- enum -------*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
var Role1;
(function (Role1) {
    Role1[Role1["Admin"] = 5] = "Admin";
    Role1[Role1["User"] = 6] = "User";
    Role1[Role1["Author"] = 7] = "Author";
})(Role1 || (Role1 = {}));
var person2 = {
    name: "Abdullah",
    age: 24,
    role: Role1.Author
};
console.log(person2);
/*------- any -------*/
var mixedArray;
mixedArray = ["mixed", 2, true];
var nameAny;
nameAny = 5;
nameAny = "Abdul";
console.log(mixedArray);
console.log(nameAny);
/*------- union -------*/
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number")
        result = n1 + n2;
    else
        result = n1.toString() + n2.toString();
    return result;
}
console.log(combine("Max", 2));
console.log(combine(2, 2));
/*------- literal type -------*/
function combineLiteral(n1, n2, litral) {
    var result;
    if (litral === "as-number") {
        if (typeof n1 === "number" && typeof n2 === "number")
            return (result = n1 + n2);
    }
    else if (litral === "as-text") {
        if (typeof n1 === "string" && typeof n2 === "string")
            return (result = n1 + n2);
    }
    else
        return null;
}
console.log(combineLiteral("Max", "2", "as-text"));
console.log(combineLiteral(2, 2, "as-number"));
function combineAlises(n1, n2, litral) {
    var result;
    if (litral === "as-number") {
        if (typeof n1 === "number" && typeof n2 === "number")
            return (result = n1 + n2);
    }
    else if (litral === "as-text") {
        if (typeof n1 === "string" && typeof n2 === "string")
            return (result = n1 + n2);
    }
    else
        return null;
}
console.log(combineAlises("Max", "2", "as-text"));
console.log(combineAlises(2, 2, "as-number"));
/*------- function return type -------*/
function addFunc(n1, n2) {
    return n1 + n2;
}
// function addFunc(n1: number, n2: number): number {
//   return n1 + n2;
// }
function printResultFunc(num) {
    console.log("Result: " + num);
}
// function printResultFunc(num: number): void {
//   console.log("Result: " + num);
// }
console.log("Return type is number by default: " + addFunc(1, 2));
console.log("Return type is void by default: ", printResultFunc(5));
/*------- Function type -------*/
var combineFunc;
// getting error
// combineFunc = 5
combineFunc = addFunc;
console.log(combineFunc(6, 2));
var combineFuncPrime;
combineFuncPrime = addFunc;
console.log(combineFuncPrime(6, 2));
/*------- Function types  callbacks -------*/
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(5, 7, function (result) {
    console.log(result);
});
/*------- unknown type -------*/
var userName;
var userInput;
userInput = 9;
userInput = "Abdul";
// Type 'unknown' is not assignable to type 'string'.
// userName = userInput;
var userName1;
var userInput1;
userInput1 = 9;
userInput1 = "Abdul";
// error goes away
userName1 = userInput1;
/*------- never type -------*/
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var res = generateError("An error occurred!", 500);
console.log(res);
