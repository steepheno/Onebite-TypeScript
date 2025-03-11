/**
 * 타입 좁히기
 * -> 조건문 등을 이용해 넓은 타입 -> 좁은 타입 자동 추론이 가능할 때때
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // value; // value 타입: string | number타입
  // value.toUpperCase();  // 사용 불가!
  // value.toFixed();      // 사용 불가!

  if (typeof value === "number") {  // 조건문과 함께 타입을 좁힐 수 있는 것을 "타입 가드"라고 부름
    console.log(value.toFixed()); // value 타입: number
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value 타입: string
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // <참고> in 뒤에는 null, undefined가 올 수 없음!
  else if (value && "age" in value) {  // &&를 통해 value가 null이 아님을 명시
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
