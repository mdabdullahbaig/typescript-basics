console.log("-----Inheritance-----");

// Inheritance
class Student {
  // Properties or Fields
  private id: number;
  private name: string;
  protected mobile: string;

  public publicCourses: {}[] = [];
  private privateCourses: {}[] = [];
  protected protectedCourses: {}[] = [];

  // Constructor
  constructor(id: number, name: string, mobile: string) {
    this.id = id;
    this.name = name;
    this.mobile = mobile;
  }

  addCourse(course: {}) {
    this.publicCourses.push(course);
    this.protectedCourses.push(course);
    this.privateCourses.push(course);
  }

  getCourses() {
    console.log(this.publicCourses);
    console.log(this.protectedCourses);
    console.log(this.privateCourses);
  }
}

class LeteralStudent extends Student {
  constructor(
    id: number,
    name: string,
    mobile: string,
    private leteralId: number
  ) {
    super(id, name, mobile);
  }

  addCourse(course: {}) {
    this.publicCourses.push(course);
    this.protectedCourses.push(course);

    // Property 'privateCourses' is private and only accessible within class
    // this.privateCourses.push(course);
  }

  getCourses() {
    console.log(this.publicCourses);
    console.log(this.protectedCourses);

    // Property 'privateCourses' is private and only accessible within class
    // console.log(this.privateCourses);
  }
}

const student = new Student(1, "Max", "1234567890");
student.addCourse({ id: 2, name: "Perry", mobile: "1234567890" });
student.addCourse({ id: 3, name: "Bell", mobile: "1234567890" });
student.addCourse({ id: 4, name: "Winston", mobile: "1234567890" });

console.log(student.getCourses());

const leteralStudent = new LeteralStudent(1, "Max", "1234567890", 11);
leteralStudent.addCourse({ id: 2, name: "Prince", mobile: "1234567890" });
leteralStudent.addCourse({ id: 3, name: "Jack", mobile: "1234567890" });
leteralStudent.addCourse({ id: 4, name: "Ester", mobile: "1234567890" });

leteralStudent.getCourses();
