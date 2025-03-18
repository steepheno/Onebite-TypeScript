/* 어려움. 지금 이해되지 않으면 나중에 다시 복습해도 됨 */

/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단함
 *
 * <CheckList>
 * 1) 반환값의 타입이 호환되는가?
 * 2) 매개변수 타입이 호환되는가?
 */

/* 기준1. 반환값 호환 여부 */
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // Type: number (업캐스팅, 호환 O)
// b = a  // Type: number 리터럴 (다운캐스팅, 호환 X)

/* 기준2. 매개변수 호환 여부 */
// 2-1) 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;  // Type: number (업캐스팅, 호환 X)
d = c; // Type: number 리터럴 (다운캐스팅, 호환 O)

// 왜????
/* 매개변수가 객체 타입을 사용하는 예시 */
type Animal = {  // 슈퍼 타입
  name: string;
};

type Dog = {  // 서브 타입
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅 (불가능)
dogFunc = animalFunc; // 다운캐스팅 (가능)

// 증명
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);  // 말이 안 되는 상황
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

// 2-2) 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b)=> {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;  // 불가능