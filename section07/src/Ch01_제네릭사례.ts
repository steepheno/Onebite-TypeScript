/**
 * 사례 1 - 매개변수 간 타입이 다를 때
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);


/**
 * 사례 2 - 배열 내 원소의 타입이 다를 때
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // ...unknown은 rest 매개 변수와 쓰임이 같음
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
console.log(num);  // num에는 0 저장

let str = returnFirstValue([1, "Hello", "mynameis"]);
console.log(str);  // "Hello"


/**
 * 사례 3 - return값에 특정 프로퍼티가 없을 때
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);  // 3
console.log(var1);

let var2 = getLength("12345");  // 5
console.log(var1);

let var3 = getLength({ length: 10 });  // 10
console.log(var1);

// let var4 = getLength(10);  // length 프로퍼티가 없으므로 타입 에러 발생
