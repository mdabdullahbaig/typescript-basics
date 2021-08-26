console.log("-----Abstract classes-----");

// Abstract classes
abstract class Parent {
  // constructor
  constructor(protected name: string) {}

  // abstract method
  abstract parentName(): void;

  // method
  showParentName() {
    console.log(this.name);
  }
}

// Cannot create an instance of an abstract class.ts
// const parent = new Parent("Max")

class Child extends Parent {
  constructor(name: string) {
    super(name);
  }

  // overloading
  parentName() {
    console.log("Your parent name is " + this.name);
  }
}

const child = new Child("Max");
child.showParentName();
child.parentName();
