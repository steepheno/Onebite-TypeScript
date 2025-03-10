/**
 * Unknown 타입
 */

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운 캐스팅 <불가능>
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 공집합 같은 것
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // never 타입은 모든 타입의 서브 타입
  // 어떤 타입의 변수에도 값을 넣을 수 있음
  // 업 캐스팅이니까
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅 <불가능>
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("Hi!");
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 * 모든 타입의 슈퍼 타입이자
 * 모든 타입의 서브 타입
 * 예외 -> Never
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다 캐스팅 가능 (any 타입 한정 Unknown 타입도 다운 캐스팅 가능)
  undefinedVar = anyVar; // 자신이 다운 캐스팅해도 됨
  // neverVar = anyVar;  // 불가능 (Never 타입은 공집합이므로 어떤 타입도 다운 캐스팅 불가)
}

// 공식 문서에 '타입 호환표'가 있음
