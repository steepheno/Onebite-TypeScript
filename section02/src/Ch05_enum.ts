// enum 타입
// 여려 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과로 사라지지 않음

enum Role {
  ADMIN,  // 숫자 지우면 자동으로 0번부터 할당
  USER ,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: "JS",
  role: Role.ADMIN,  // 관리자
  language: Language.korean,
}

const user2 = {
  name: "홍길동",
  role: Role.USER,  // 일반 유저
}

const user3 = {
  name: "아무개",
  role: Role.GUEST,  // 게스트
}

console.log(user1, user2, user3);