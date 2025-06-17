/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog';  // 모든 조합을 일일이 쓰는 건 너무 비효율적

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "black-cat";  // ''만 쳐도 Color와 Animal 조합들이 자동완성 됨
