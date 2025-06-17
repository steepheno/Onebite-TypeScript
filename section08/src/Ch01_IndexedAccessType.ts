/**
 * 인덱스드 맥세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 아래의 Post["author"]에서 author는 타입! 변수 아님
// author의 id를 가져오고 싶다면 Post["author"]["id"] 이런 식으로 쓰면 됨
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 아래 대괄호에 [number]라고 써도 됨
const post: PostList[0] = {  // PostList[0]에 들어있는 index도 타입! 변수 아님
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "JS",
    age: 28,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];

type TupNum = Tup[number];  // 최상위 공통 타입으로 뽑아냄