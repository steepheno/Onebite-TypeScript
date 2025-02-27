// 주의사항
// type User = {}  // 같은 scope 내에 동일 이름의 타입 정의 불가
function func() {
}
;
let user = {
    id: 1,
    name: "JS",
    nickname: "abc",
    birth: "1998",
    bio: "hello",
    location: "Seoul",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "순간이동",
    birth: "1600",
    bio: "나는 의적",
    location: "조선",
};
let countryCodes = {
    Korea: 'ko',
    UnitedStates: 'us',
    UnitedKingdom: 'uk',
};
let countryNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnitedKingdom: 826,
};
export {};
// 49행 내용만 정의됐다면, countryNumberCodes는 빈 객체여도 OK
// 단,
// Korea: number 가 추가되면 Korea라는 key의 value로 숫자값이 반드시 와야 함
