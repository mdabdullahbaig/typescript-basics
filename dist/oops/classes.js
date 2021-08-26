"use strict";
console.log("-----Classes-----");
// Class
class Department {
    // Constructor
    constructor(id, name, secret) {
        this.publicEmployees = [];
        this.privateEmployees = [];
        this.protectedEmployees = [];
        this.id = id;
        this.name = name;
        this.secret = secret;
    }
    // Short Constructor
    // constructor(
    //   private id: number,
    //   private name: string,
    //   private readonly depSecret: string
    // ) {}
    // Getters
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    get getSecret() {
        return this.secret;
    }
    // Setters
    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    // Cannot assign to 'secret' because it is a read-only property.
    // this.secret = "giving error because its value only set once"
    // set setSecret(secret: string) {
    //    this.secret = secret;
    // }
    // Methods
    describe() {
        console.log(`Dapartment id: ${this.id}, name: ${this.name} and secret: ${this.secret}`);
        console.log(`Dapartment id: ${this.getId}, name: ${this.getName} and secret: ${this.getSecret}`);
    }
    // Define Department type explicitely
    // describe(this: Department) {
    //   console.log(
    //     `Dapartment id: ${this.getId}, name: ${this.getName} and secret: ${this.getSecret}`
    //   );
    // }
    addEmployee(employee) {
        this.publicEmployees.push(employee);
        this.protectedEmployees.push(employee);
        this.privateEmployees.push(employee);
    }
    printEmployees() {
        console.log(this.publicEmployees);
        console.log(this.protectedEmployees);
        console.log(this.privateEmployees);
    }
}
const firstDept = new Department(1, "Department", "firstSecret");
console.log(firstDept);
firstDept.setId = 2;
firstDept.setName = "Department 2";
console.log(firstDept.getId);
console.log(firstDept.getName);
console.log(firstDept.getSecret);
const employeeSchema = {
    id: 1,
    name: "Dept 1",
};
firstDept.addEmployee(employeeSchema);
firstDept.addEmployee({ id: 2, name: "Dept 2" });
firstDept.addEmployee({ id: 3, name: "Dept 3" });
firstDept.printEmployees();
