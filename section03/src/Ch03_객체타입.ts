/*
 * 기본 타입 간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/*
 * 객체 타입 간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 정상 작동  (업캐스팅)
// dog = animal;  // 에러 발생! (다운 캐스팅)

/**
 * animal 객체는 슈퍼 타입, dog 객체는 서브 타입
 * -> 타입 스크립트는 프로퍼티를 기준으로 타입을 정의함 (구조적 타입 시스템)
 * -> name, color가 있다면 Animal 타입
 * -> name, color, breed가 있으면 Animal 타입이면서 dog 타입
 * -> 즉, 조건이 더 적은 타입이 슈퍼 타입!
 */

// 연습
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // 업 캐스팅
// programmingBook = book;  // 다운 캐스팅

/* 초과 프로퍼티 검사 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",  // 왜 불가능???  => 초과 프로퍼티 검사
};

let book3: Book = programmingBook; // 객체 리터럴을 사용하지 않았으므로 허용

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",  // 초과 프로퍼티 발생 (함수의 인수로 객체를 전달할 때도 발동함)
});
func(programmingBook); // 변수로 담아서 함수에 넣어야 함

/**
 * 초과 프로퍼티 검사
 * => 변수를 초기화할 때(book2) 이미 초기화했던 값(ex. Book)으로 객체 리터럴을 사용하면 발동되는 검사
 * => 실제 타입에 정의하지 않은 프로퍼티를 작성하면 에러
 * => 객체 타입에 정의된 것만 사용하도록 제한해야 함
 */
