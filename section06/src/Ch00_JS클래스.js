/**
 * 클래스
 */

let studentA = {
  name: "JS",
  grade: "A+",
  age: 28,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드: 클래스가 만들어낼 객체의 properties
  name;
  grade;
  age;

  // 생성자: 실제로 객체를 생성하는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // 파라미터는 모두 적어줘야 함
    super(name, grade, age); // 부모 클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 개발함`);
  }
}

const studentDeveloper = new StudentDeveloper("Jsun", "B+", 30, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 인스턴스: 클래스를 이용해서 만든 객체
// let studentB = new Student("Jsun", "A+", 28); // 얘는 Student의 인스턴스
// console.log(studentB);
// studentB.study();
// studentB.introduce();
