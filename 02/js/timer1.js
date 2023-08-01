//일정 시간마다 반복하기

function greeting() {
  console.log("Hello~~");
}

// 3초 마다 callback() 를 실행.
//setInterval(greeting, 3000);

// greeting 콜백 함수를 화살표 함수로 변경.
// 매개변수 => 함수 내용
setInterval (
    () => {
      console.log("Hello~~");
    }
    , 3000
)