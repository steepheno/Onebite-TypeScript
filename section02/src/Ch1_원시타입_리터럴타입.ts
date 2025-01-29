/* 원시타입 5가지 */
/* 1. number */
let num1: number = 123;  // 타입 주석(Annotation)
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = 'hello';  // 오류 발생
// num1.toUpperCase();  // 오류 발생
num1.toFixed();  // 가능

/* 2. string */
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str1 = 123;  // 오류 발생
// str1.toFixed();  // 오류 발생
str1.toUpperCase();  // 가능

/* 3. boolean */
let bool1: boolean = true;
let bool2: boolean = false;

/* 4. null */
let null1: null = null;

/* 5. undefined */
let unde1: undefined = undefined;

/* 리터럴 타입 */
// 초기화한 값 그 자체가 타입이 되는 것
// 리터럴 == 값

// 숫자
let numA: 10 = 10;
// numA = 12;  // 불가능

// 문자
let strA: "hello" = "hello";
// strA = 'hi'  // 불가능

// boolean
let boolA: true = true;
// boolA = false;  // 불가능


/* 참고 */
// let numA: number = null;  // 기본적으로 null값을 임시로 넣을 수 없음!
// 단, tsconfig.json에 strictNullChecks를 false로 두면 가능하긴 함
// strictNullChecks는 strict 옵션의 하위 옵션
// 상위 옵션이 true이면 하위 옵션도 기본적으로 true가 적용 (false면 false)
