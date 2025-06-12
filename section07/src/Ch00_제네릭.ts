/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();  // 에러 발생

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);  // boolean 타입

let str = func("string");  // string 타입

let arr = func<[number, number, number]>([1, 2, 3]);  // 튜플 타입
