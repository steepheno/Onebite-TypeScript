/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입, 교집합 타입 존재
 */

/**
 * 1. 합집합 타입 (Union Type)
 */

let a: string | number | boolean; // 무한으로 타입 추가 가능
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {  // 어디에도 속하지 않는 객체
//   name: "",
// }

/**
 * 2. 교집합 타입 (Intersection Type)
 */

let variable: number & string; // variable은 never 타입
type Intersection = Dog & Person;

let intersection1: Intersection = {
  // 프로퍼티 하나라도 빼먹으면 타입 에러 발생
  name: "",
  color: "",
  language: "",
};
