/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "JS",
  age: 28,
  position: "developer",
  work() {
    console.log("야근중");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("야근중");
  }
}

class ExcutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("Jsun", 28, "개발자");
console.log(employee);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
