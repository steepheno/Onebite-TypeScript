/**
 * <인터페이스>
 */

interface Person {
  name: string;
  age: number;
}

interface Person2 {
  readonly name: string;
  age?: number;
  sayHi(): void;  // 함수 타입 (호출 시그니처)
  sayHi(a: number, b: number): void;

  /* 이렇게 쓰면 중복으로 선언됐다고 에러 뜸 */
  // sayHi:() => void;
  // sayHi:(a: number, b: number) => void;
}

const person: Person = {
  name: "JS",
  age: 28,
};

const person2: Person2 = {
  name: "JS",
  age: 28,
  sayHi: function () {
    console.log("Hi");
  },
};

// person2.name = "홍길동"  // readonly 때문에 에러 발생

person2.sayHi();
person2.sayHi(1, 2);

/* 인터페이스에서는 Union, Intersection 사용 불가능! */
// 객체 정의할 때 &, | 사용함
