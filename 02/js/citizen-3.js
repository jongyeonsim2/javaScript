//citizen-3.js
//함수에서 다른 함수 반환하기


//변수에 할당해서 사용하는 익명함수 + 화살표 함수
// return 예약어 다음에 함수가 있음.


// 여기가 중요 3 : 재사용을 위해서 변수에 할당
let init =
//여기가 중요 2 : 화살표 함수 구현
  () => {
    //여기가 중요 1 : return 예약어 다음에 함수가 있음
    return function(a, b) {
      // 함수 호출 후 처리 결과를 반환.
      return a - b > 0 ? a - b : b - a;
    }
  }

console.log(
    `init()(30, 20) : ${init()(10, 20)}`
);

// init()(10, 20) 가 실행시 를 두 부분으로 나누어서 생각하면 쉬움.
// 1. init() : let init = () => {  }
// 2. (10, 20) : return function(a, b) { }
