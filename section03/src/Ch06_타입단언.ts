/**
 * 타입 단언
 * -> 업 컈스팅, 다운 캐스팅과 관련은 없음
 * -> 잠깐 눈 가리는 용도
 * 확실할 때만 쓰자
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "JS";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 * 안전한 문법이 아님 (겹치는 부분이 있어야 함)
 */

let num1 = 10 as never; // number가 never의 슈퍼타입이므로 만족
let num2 = 10 as unknown; // unknown이 모든 타입의 슈퍼타입이므로 만족 (number가 unknown의 서브타입)

// let num3 = 10 as string;  // number가 string의 슈퍼타입도, 그 반대도 아니므로 에러 발생
let num3 = 10 as unknown as string; // 이건 가능 (다중 단언, 절대 "좋은 문법이 아님!")

/**
 * const 단언
 */

let num4 = 10 as const; // const로 선언한 것과 같은 효과

let cat = {
  // 읽기 전용 프로퍼티가 된 객체로 추론됨
  name: "야용이",
  color: "yellow",
} as const;

// cat.name = ""; // 불가능

/**
 * Non Null 단언
 * 어떤 값이 null 또는 undefined가 아니라고 알려주는 역할
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "JS",
};

// const len: number = post.author?.length; // ? 자동 추가됨 -> 옵셔널 체이닝 -> 이 값 자체가 undefined가 될 수도 있음
// But, number에는 undefined 값이 담길 수 없음 -> 타입 에러 발생

// 해결책
const len: number = post.author!.length; // !를 통해 해당 값이 null 또는 undefined가 아닐 것이라고 컴파일러에게 확신을 주는 것
