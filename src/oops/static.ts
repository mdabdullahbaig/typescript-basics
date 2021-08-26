console.log("-----Static Methods & Properties-----");

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
