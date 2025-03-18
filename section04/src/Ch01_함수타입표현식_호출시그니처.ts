/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number; // Function Type Expression

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a: number, b: number) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입 (함수도 객체이므로 프로퍼티 추가 정의 가능, 자주 사용하지 않음)
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a: number, b: number) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
