/**
 * <인터페이스 확장>
 */

interface Animal {
  // type Animal = {}로 정의해도 extends 가능
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "hello"  // 타입 재정의 가능 (단, 슈퍼 타입의 서브 타입이어야 함!)
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/* 인터페이스 다중 확장 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

/* 비효율적인 방법 */

// interface Dog {
//   name: string;
//   color: string;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   color: string;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   color: string;
//   isFly: boolean;
// }
