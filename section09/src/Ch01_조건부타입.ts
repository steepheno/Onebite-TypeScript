/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>
let varB : StringNumberSwitch<string>

function removeSpaces<T>(text: T): T extends string ? string : undefined  // 오버로드 시그니처

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }
  else {
    return undefined;
  }
}

// 조건에 따라 반환값 타입을 원하는대로 바꿀 수 있음

let result = removeSpaces("Hi Im Jsun");
result.toUpperCase();

let result2 = removeSpaces(undefined);