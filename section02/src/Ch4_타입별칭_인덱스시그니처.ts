/* 타입 별칭 */
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
  // 추가하고 싶은 내용의 타입은 여기에
};

// 주의사항
// type User = {}  // 같은 scope 내에 동일 이름의 타입 정의 불가
function func() {
  type User = {};  // 이건 가능
};

let user: User = {
  id: 1,
  name: "JS",
  nickname: "abc",
  birth: "1998",
  bio: "hello",
  location: "Seoul",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "순간이동",
  birth: "1600",
  bio: "나는 의적",
  location: "조선",
};

/* 인덱스 시그니처 */
// key와 value의 규칙을 기준으로 객체의 타입을 정의하는 것
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string] : number;  // 이 규칙을 어기지만 않으면 별다른 오류는 나지 않음
  Korea: number;  // Korea의 value 타입(number)은 49행의 타입과 일치해야 함!
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
}

// 49행 내용만 정의됐다면, countryNumberCodes는 빈 객체여도 OK
// 단,
// Korea: number 가 추가되면 Korea라는 key의 value로 숫자값이 반드시 와야 함
