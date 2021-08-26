"use strict";
// class
class Department {
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    constructor(id, 
    // private readonly depSecret: string,
    name) {
        this.id = id;
        this.name = name;
        //   private name: string;
        //   private readonly depSecret: string;
        this.employees = [];
        this.protectedEmployees = [];
    }
    describe() {
        console.log(`Dapartment id: ${this.id} and name: ${this.name}`);
    }
    //   describe1(this: Department) {
    //     console.log(`Dapartment: ${this.name}`);
    //   }
    addEmployee(employee) {
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
    constructor(id, name, admins) {
        super(id, name);
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === "Max")
            return;
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
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    get getSalary() {
        return this.salary;
    }
    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    set setSalary(salary) {
        this.salary = salary;
    }
}
const employee = new Employee(1, "Max", 2000);
console.log(employee);
employee.setSalary = 5000;
console.log("Salary: ", employee.getSalary);
// Static Methods and Properties
class Calc {
    constructor(name) {
        this.name = name;
    }
    static add(num1, num2) {
        return num1 + num2;
    }
    static showStaticValue() {
        console.log("Static Value : " + Calc.PI);
    }
}
Calc.PI = 3.14;
// without creating object
console.log("Add: " + Calc.add(5, 6), "PI: " + Calc.PI);
Calc.showStaticValue();
// Abstract classes
class Parent {
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
    constructor(log) {
        this.log = log;
    }
    static setSinglenton(log) {
        // if(this.instance){
        //     return this.instance
        // }
        if (Singleton.instance) {
            return Singleton.instance;
        }
        return (this.instance = new Singleton(log));
    }
    get getLog() {
        return this.log;
    }
}
// Constructor of class 'Singleton' is private and only accessible within the class declaration.
// console.log(new Singleton("This is first instance."))
const instanceFirst = Singleton.setSinglenton("This is singleton first instance");
console.log(instanceFirst.getLog);
const instanceSecond = Singleton.setSinglenton("This is singleton second instance");
console.log(instanceSecond.getLog);
console.log(instanceFirst === instanceSecond);
