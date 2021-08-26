// class

class Department {
  //   private name: string;
  //   private readonly depSecret: string;
  private employees: string[] = [];
  protected protectedEmployees: string[] = [];

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  constructor(
    private id: number,
    // private readonly depSecret: string,
    private name: string
  ) {}

  describe() {
    console.log(`Dapartment id: ${this.id} and name: ${this.name}`);
  }

  //   describe1(this: Department) {
  //     console.log(`Dapartment: ${this.name}`);
  //   }

  addEmployee(employee: string) {
    this.employees.push(employee);
    // this.depSecret = "giving error because its value only set once"
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

// const accounting = new Department(1, "Department Secret", "Accounting");
const accounting = new Department(1, "Accounting");

console.log(accounting);

accounting.describe();

// accounting.describe1();

// const accountingCopy = { name: "Dummy", describe1: accounting.describe1 };

// accountingCopy.describe1();

accounting.addEmployee("Abdul");
accounting.addEmployee("Max");
accounting.printEmployeeInformation();

//Inheritance
class ITDepartment extends Department {
  public admins: string[];
  constructor(id: number, name: string, admins: string[]) {
    super(id, name);
    this.admins = admins;
  }

  addEmployee(name: string) {
    if (name === "Max") return;
    this.protectedEmployees.push(name);
  }
}

const iTAccounting = new ITDepartment(1, "IT Accont", ["Abdul"]);
iTAccounting.addEmployee("Max");
iTAccounting.addEmployee("Life");
iTAccounting.addEmployee("Lerry");
iTAccounting.printEmployeeInformation();

console.log(iTAccounting);

// getter and setter

class Employee {
  constructor(
    private id: number,
    private name: string,
    private salary: number
  ) {}

  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getSalary() {
    return this.salary;
  }

  set setId(id: number) {
    this.id = id;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setSalary(salary: number) {
    this.salary = salary;
  }
}

const employee = new Employee(1, "Max", 2000);
console.log(employee);
employee.setSalary = 5000;

console.log("Salary: ", employee.getSalary);

// Static Methods and Properties

class Calc {
  static PI = 3.14;
  static add(num1: number, num2: number) {
    return num1 + num2;
  }

  constructor(private name: string) {}

  static showStaticValue() {
    console.log("Static Value : " + Calc.PI);
  }
}

// without creating object
console.log("Add: " + Calc.add(5, 6), "PI: " + Calc.PI);
Calc.showStaticValue();

// Abstract classes

abstract class Parent {
  abstract parentName(): void;
}

class Child extends Parent {
  parentName() {
    console.log("Your parent name is parent");
  }
}

new Child().parentName();
// Cannot create an instance of an abstract class
// new Parent();

// Private Constructor && Singleton

class Singleton {
  private static instance: Singleton = Singleton;
  private constructor(log: string) {}

  static setSinglonton() {
    // if(this.instance){
    //     return this.instance
    // }
    if (Singleton.instance) {
      return this.instance;
    }
    return (this.instance = new Singleton("This is singleton"));
  }
}

// Constructor of class 'Singleton' is private and only accessible within the class declaration.
// console.log(new Singleton("This is first instance."))

console.log(Singleton.setSinglonton());
