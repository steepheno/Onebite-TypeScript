/**
 * 타입 추론
 * -> 타입 스크립트: 점진적 타입 시스템
 */

let a = 10; // number로 타입 추론 -> '타입 넓히기' -> 범용적으로 변수 a를 사용할 수 있도록 하기 위해
let b = "hello";

// 매개변수로 받을 때에는 타입을 정의해줘야 함 (추론 못해)
// function func(param) {

// }

/* 타입 추론을 잘 하는 경우 */
let c = {
  id: 1,
  name: "JS",
  profile: {
    nickname: "Jsun",
  },
  urls: ["https://jsun.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func() {
  return "hello";
}

function func2(message = "hello") {
  return "hello";
}

/* 타입 추론이 불가능할 때 */
let d; // 암묵적 any 타입 (아무런 정보가 없으니까) <추천하지 않는 방법>

/* any 타입의 진화 */
d = 10;
d.toFixed(); // number 타입에서만 쓸 수 있는 메서드도 사용 가능
// d.toUpperCase();  // 불가능
d; // 타입: number

d = "hello";
// d.toFixed();  // 불가능 -> 지금은 string으로 추론되므로
d.toUpperCase(); // 가능
d; // 타입: string

/* const 쓰면 */
const num = 10; // number 리터럴 타입
const str = "hello"; // string 리터럴 타입

let arr = [1, "string"]; // Union 타입으로 자동 추론됨 -> 최적의 공통 타입으로 추론함
