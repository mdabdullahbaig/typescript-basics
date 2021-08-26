console.log("-----Singleton-----");

// Singleton & Private Constructor

class Singleton {
  private static instance: Singleton;
  private log: string;

  private constructor(log: string) {
    this.log = log;
  }

  static getSingletonInstance(log: string) {
    if (!Singleton.instance) {
      this.instance = new Singleton(log);
    }
    return Singleton.instance;
  }

  get getLog() {
    return this.log;
  }
}

// Constructor of class 'Singleton' is private and only accessible within the class declaration.
// console.log(new Singleton("This is first instance."))

const firstInstance = Singleton.getSingletonInstance(
  "This is singleton first instance"
);
console.log(firstInstance.getLog);

const secondInstance = Singleton.getSingletonInstance(
  "This is singleton second instance"
);
console.log(secondInstance.getLog);

console.log(
  "This pointed to same object in the memory: ",
  firstInstance === secondInstance
);
