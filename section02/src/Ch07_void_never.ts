// 1) Void
// 공허
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {  // void 타입을 지정하면 return문을 쓰지 않아도 됨
  console.log("hello");
}

let a: void;
// a = 1;  // 불가능
// a = "hello";  // 불가능
// a = {};  // 불가능

// a = null;  // tsconfig.json에서 strictNullChecks: false 하면 할당 가능

// 이거만 가능
a = undefined;


// 2) Never
// 존재하지 않는
// "불가능한" 타입

// 절대 정상적으로 종료될 수 없어 반환값이 있는 것 자체가 모순인 경우
function func3(): never {
  while(true) {}
}

// 실행되자마자 프로그램이 중지될 함수
function func4(): never {
  throw new Error();
}

// 그 어떤 값도 저장할 수 없음
let b: never
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;

let anyVar: any;
// b = anyVar;