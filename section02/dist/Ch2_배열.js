/* 배열 */
let numArr = [1, 2, 3];
let strArr = ["Hello", "Im", "JS"];
let boolArr = [true, false, true]; // 제네릭 문법으로도 배열 정의 가능
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입 정의
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
/* 튜플 */
// 타입과 길이가 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3];  // 개수 초과 불가능
// tup1 = ["1", "2"];  // 다른 타입 삽입 불가
let tup2 = [1, "2", true];
// 길이가 다르거나, 순서가 달라도 안 됨
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
export {};
