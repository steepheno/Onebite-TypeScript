/**
 * 프로미스 (Promise)
 */

import { resolve } from "path";

const promise = new Promise<number>((resolve, reject) => {  // 실행자 함수: 비동기 처리를 실제로 수행하는 함수
  setTimeout(() => {
    resolve(20);
    reject("~~때문에 실패");  // any 타입이므로 어떤 값을 넣어도 OK
  }, 3000);
});

// response의 타입은 unknown
// Promise는 resolve, reject를 호출해서 전달하는 비동기 작업의 결과값의 타입을 자동으로 추론할 수 없음
promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});


/**
 * Promise를 반환하는 함수의 타입 정의
 */

interface Post {
  id: number;
  title: string;
  contents: string;
}

function fetchPost(): Promise<Post> {  // 협업의 관점에서 반환값 타입을 함수 선언부에 정의하는게 좋음
  return new Promise((resolve, reject) => {  // 여기에 정의해도 동작에는 문제 없음
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        contents: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
