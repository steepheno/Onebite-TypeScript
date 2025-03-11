/**
 * 서로소 유니온 타입
 * -> 교집합이 없는 타입들로만 만든 유니온 타입 집합  ex) string 타입과 number 타입
 * -> 서로소 관계에 있는 타입들
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCnt: string;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCnt: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입

// <요구 사항>
// Admin => {name}님 현재까지 {kickCnt}명 강퇴했습니다.
// Member => {name}님 현재까지 {point}포인트 모았습니다.
// Guest => {name}님 현재까지 {visitCnt}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCnt}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCnt}명 방문하셨습니다.`);
      break;
    }
  }

  // if (user.tag === "ADMIN") {
  //   // admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCnt}명 강퇴했습니다.`);
  // } else if (user.tag === "MEMBER") {
  //   // member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
  // } else {
  //   // guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCnt}명 방문하셨습니다.`);
  // }
}

/**
 * 서로소 유니온 타입 사례2
 * => 태그를 붙여서 객체를 완벽히 구분할 수 있음
 * => Tagged Union Type이라고도 부름
 */

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// <요구 사항>
// 로딩 중 => 콘솔에 '로딩 중' 출력
// 실패 => 에러 메시지 출력
// 성공 => 데이터 출력

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response?.data}`);
      break;
    }
  }
}

/* 비동기 작업의 결과를 처리하는 객체 */
const loading = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
};

const success = {
  state: "SUCCESS",
  response: {
    data: "데이터~~~",
  },
};
