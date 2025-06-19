/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 복습 - 타입 확인해보기
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 분산 조건부 타입
let c: StringNumberSwitch<number | string>;
// 아래 내용대로 각각 1번씩 전달됨
// StringNumberSwitch<number> -> string
// StringNumberSwitch<string> -> number

let d: StringNumberSwitch<boolean | number | string>;
/* 1단계 */
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

/* 2단계 */
// number
// string
// number

/* 결과 */
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never: T;
type A = Exclude<number | string | boolean, string>;
/* 1단계 */
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

/* 2단계 */
// number
// never
// boolean

/* 결과 */
// number | never | boolean  (결과에 never가 포함되어 있으면 사라짐. 공집합과 같은 걸로 생각하면 됨)
// number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
/* 1단계 */
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

/* 2단계 */
// never
// string
// never

/* 결과 */
// string