//citizen-2.js
// 함수를 다른 함수로 전달하기
// hello 또는 bye 함수를 다른 함수(userCheck) 로 전달하기.

// 매개변수로 전달될 함수1
function hello() {
  return "hello";
}

// 매개변수로 전달될 함수2
function bye() {
  return "bye, bye";
}

function userCheck( name, fn ) {
  console.log(`${name} 님`, fn()); // 매개변수로 전달 받은 함수를 실행(호출).
  // Hong 님 hello
  // Hong 님 bye, bye
}

// 함수 실행시, 매개변수로 함수를 전달하면,  다른 함수로 전달이 됨.
userCheck("Hong", hello);// hello 전달 => userCheck 에서 hello 실행 => hello가 호출됨.
userCheck("Hong", bye);