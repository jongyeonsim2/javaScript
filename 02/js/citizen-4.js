//citizen-4.js
//사용자로부터 입력 받은 데이터를 알림 창으로 보여주어야 하는 경우.

// 입력받은 사용자 정보를 알림창으로 보여주는 기능.
function showData(name, age) {
  alert(
    `안녕하세요? ${name} 님, 입력하신 나이는 ${age} 입니다.`
    );
}

// 사용자로부 이름과 나이를 입력 받는 기능.
function getData(callback) {
  let name = prompt("이름을 입력해주세요.");
  let age = prompt("나이를 입력해주세요.");

  callback(name, age);// 프로그램 실행시, showData 함수가 전달됨.
              // showData 호출시 필요한 매개변수를 전달.
}

// 프로그램 실행.
getData(showData);