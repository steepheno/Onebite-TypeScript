/**
 * 맵드 타입
 * 인터페이스에서는 사용 불가!
 * 타입 별칭을 통해서만 사용 가능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // : 기준으로 왼쪽 [] 안은 key, 오른쪽은 value (Indexed Access랑 같은 형태. 타입이 옴)
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 1명의 User 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "JS",
    age: 28,
  };
}

// 1명의 User 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정 기능
}

const user = fetchUser();
user.id = 2  // 26행에서 타입을 ReadonlyUser로 바꾸면 에러 발생

updateUser({
  id: 1,
  name: "JS",
  age: 20,
});
