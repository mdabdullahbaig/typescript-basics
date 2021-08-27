"use strict";
const emp = {
    name: "Max",
    privileges: ["Admin"],
    startDate: new Date(),
};
const empInterface = {
    name: "Max",
    privileges: ["Admin"],
    startDate: 12345,
};
// type guards
function newAdd(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmpInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp)
        console.log("Privileges: " + emp.privileges);
    if ("startDate" in emp)
        console.log("Start Date : " + emp.startDate);
}
printEmpInfo(emp);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehical(veh) {
    veh.drive();
    if (veh instanceof Truck) {
        veh.loadCargo(400);
    }
}
useVehical(v1);
useVehical(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 20 });
// Type Casting
// const userInput2 = <HTMLInputElement>document.getElementById("user-input")!;
const userInput2 = document.getElementById("user-input");
if (userInput2.value)
    userInput2.value = "Hi there";
