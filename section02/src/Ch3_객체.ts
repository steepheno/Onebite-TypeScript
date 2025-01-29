/* object */
// let user: object = {
//   id: 1,
//   name: "JS"
// };
// user.id;  // 접근 불가! (이건 객체야! 그 안에 무슨 값이 있는지는 몰라,,)

// 객체 리터럴 타입
let user: {
  id?: number;  // ? 붙이면 optional property가 됨
  name: string;
} = {
  id: 1,
  name: "JS",
}
user.id;

// Optional Property (선택적 프로퍼티)
user = {
  name: "홍길동",  // id 없어도 괜찮아아
}

// Readonly Property
let config: {
  readonly apiKey: string;  // readonly 키워드 붙이기기
} = {
  apiKey: "My API Key",
};
// config.apiKey = "hacked";  // 값 변경 불가


// 연습
let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
}

// TypeScript는 "구조" 를 기준으로 타입을 정의함
// => '구조적 타입 시스템' (Property Based Type System)

// 반대 case는 "이름" 을 기준으로 정의함 (int, String, Object 등)
// => '명목적 타입 시스템'
// => Java, C언어