// 1) Any
// 특정 변수의 타입을 확실히 모를 때 사용
let anyVar: any = 10;
anyVar = "hello";  // any로 설정하지 않으면 오류 발생 (초기화하는 값 기준으로 변수 타입을 추론하므로)

anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;
// 변수에 지정할 때 모든 타입의 변수를 할당받을 수 있음 (치트키 타입)
// 런타임 에러 발생 (타입스크립트의 이점을 포기하는 셈 -> 최대한 사용하지 않는 것이 좋음


// 2) Unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;  // 할당할 수 없음
// unknownVar.toUpperCase();  // 불가능
// console.log(unknownVar + 1)  // 각종 사칙연산 불가능

// 타입 정제
// 런타임 에러를 일으키는 any보다 나음
if (typeof unknownVar === "number") {
  num = unknownVar;  // 타입 정제를 하면 할당 가능
}