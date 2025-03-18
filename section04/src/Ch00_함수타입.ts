/**
 * 함수 타입 정의
 */

/* 함수를 설명하는 가장 좋은 방법 */
// 어떤 매개변수를 받고, 어떤 결과물을 반환하는지 명시 <JavaScript>
// 어떤 "타입"의 매개변수를 받고, 어떤 "타입"의 결괏값을 반환하는지 명시 <TypeScript>

function func(a: number, b: number): number {
  return a + b; // 반환값 타입 없다면 return문 기반으로 추론함
}

/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number) => a + b; // return 타입 기반으로 타입 추론

/**
 * 함수의 매개변수
 */

function introduce(name = "JS", age: number, height?: number) {  // 필수 매개변수는 선택 매개변수 앞에 반드시 위치해야 함
  console.log(`name: ${name}`);
  if (typeof height === "number") {
    console.log(`height: ${height + 10}`);
  }
  console.log(`height: ${height}`);
}

introduce("JS", 28, 180);
introduce("JS", 28);

function getSum(...rest: number[]) {  // 가변 길이 인수를 전달하면 배열로 저장
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3)  // 6
getSum(1, 2, 3, 4, 5)  // 15
