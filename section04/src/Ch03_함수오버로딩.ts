/**
 * <함수 오버로딩>
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * JavaScript에서는 지원하지 않음
 */

/* 요구사항 */
// 하나의 함수 func
// 모든 매개변수의 타입은 number
// Ver1. 매개변수가 1개 -> 입력한 매개변수에 20 곱한 값 출력
// Ver2. 매개변수가 3개 -> 입력한 매개변수를 모두 더한 값 출력

// 버전 정의 -> "오버로드 시그니처"
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> "구현 시그니처"
function func(a: number, b?: number, c?: number) {  // ? 안 붙이면 매개변수 1개짜리 함수는 선언한 의미가 없어짐
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 오버로드 시그니처를 지키지 않으면 에러 발생
// func();
// func(1, 2);

func(1);
func(1, 2, 3);
