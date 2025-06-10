/**
 * 접근 제어자 (Access modifier)
 * 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 문법
 */

class Employee {
  // 필드
  // 생략 -> 생성자에 접근 제어자를 넣으면 필드를 중복 선언하게 됨

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  // 접근 제어자가 붙어있는 매개변수듣은 자동으로 필드를 정의하고, 필드 값 초기화도 자동으로 수행

  // 메서드
  work() {
    console.log(`${this.name} 야근중`);
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

  // 메서드
  func() {
    // this.name; // 파생 클래스에서도도 private으로 설정된 필드에 접근 불가
    this.age; // protected까지는 파생 클래스 내에서 접근 가능
  }
}

const employee = new Employee("JS", 28, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);