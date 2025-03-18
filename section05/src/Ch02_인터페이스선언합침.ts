/**
 * 선언 합침
 */

/* 같은 것 2번 선언해도 에러 발생하지 않음 */
interface Person {
  name: string;
}

interface Person {
  name: string;
  // name: number  // string이 아니면 "충돌" 발생
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 28,
};

/**
 * 모듈 보강
 */

// 원본 인터페이스
interface Lib {
  a: number;
  b: number;
}

// 이 부분을 통해 인터페이스 보강 가능
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
