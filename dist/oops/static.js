"use strict";
console.log("-----Static Methods & Properties-----");
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
