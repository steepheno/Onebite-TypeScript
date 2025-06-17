/**
 * keyof 연산자
 * 연산자 뒤에는 무조건 타입이 와야 함
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "JS",
  age: 28,
};

getPropertyKey(person, "name");  // JS


/* 다른 작성법 */
type Food = typeof food;

function getFoodKey(food: Food, key: keyof typeof food) {
  return food[key];
}

const food = {
  name: "Pizza",
  kcal: 3000,
};

getFoodKey(food, "name");  // Pizza
