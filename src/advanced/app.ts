// by type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emp: ElevatedEmployee = {
  name: "Max",
  privileges: ["Admin"],
  startDate: new Date(),
};

// by interface
interface AdminInterface {
  name: string;
  privileges: string[];
}

interface EmployeeInterface {
  name: string;
  startDate: number;
}

interface ElevatedEmployeeInterface extends AdminInterface, EmployeeInterface {}

const empInterface: ElevatedEmployeeInterface = {
  name: "Max",
  privileges: ["Admin"],
  startDate: 12345,
};

// by type again
type Combinable = string | number;
type Numeric = number | boolean;

// return type is number because after intersection it only gives number
type Universal = Combinable & Numeric;

// type guards

function newAdd(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) console.log("Privileges: " + emp.privileges);
  if ("startDate" in emp) console.log("Start Date : " + emp.startDate);
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

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehical = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehical(veh: Vehical) {
  veh.drive();
  if (veh instanceof Truck) {
    veh.loadCargo(400);
  }
}

useVehical(v1);
useVehical(v2);

// Discriminated  Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const userInput2 = document.getElementById("user-input")! as HTMLInputElement;
if (userInput2.value) userInput2.value = "Hi there";
