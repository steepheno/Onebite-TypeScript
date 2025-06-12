/**
 * <제네릭 인터페이스>
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {  // 제네릭 인터페이스 사용 시, 타입 변수에 할당할 타입을 반드시 <>와 함께 작성해야 함
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};


/**
 * <인덱스 시그니처>
 */

interface NumberMap {
  [key: string]: number;
}

// 하나의 타입으로 다양한 객체를 만들 수 있음
let numberMap1: NumberMap = {
  key: -1231,
  key2: 5432,
};

interface Map<V> {
  [key: string]: V;  // 인덱스 시그니처 타입
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};


/**
 * <제네릭 타입 별칭>
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};


/**
 * <제네릭 인터페이스의 활용>
 * -> User 관리 프로그램
 * -> 구분: 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser);  // 타입 에러 발생

const developerUser: User<Developer> = {
  name: "JS",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "숭실대학교",
  },
};
