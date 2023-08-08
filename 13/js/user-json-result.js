
/**
 * 1. 대량의 데이터를 서버에 요청을 가정.
 * 2. 서버와 통신시 fetch API 사용. ( promise 반환되기 때문에 ) 
 * 3. fetch API 실행시 await 예약어 사용.
 * 4. response 되는것은 JSON 데이터임으로 객체로 변환.
 *    response.json() 실행시 await 예약어 사용.
 * 5. 객체 배열을 화면에 출력하기 위한 함수를 구현.
 * 
 */

//1. 통신부 구현
async function commToServer() {
  // fetch API 실행 => await 적용
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // response.json() 실행 => await 적용
  // fetch 가 끝날 때까지 기다리게 됨.
  const users = await response.json();

  // 화면 출력 함수 호출
  // fetch, response.json() 이 완료될 때까지 기다리게 됨.
  display(users); // 회원 의 객체 배열
}



//2. 화면 출력부 구현
// 매개변수는 회원 의 객체 배열임.
function display(users) {
  const result = document.querySelector("#result");

  let htmlStr = "";

  users.forEach(
    (user) => {
      htmlStr += `
        ${user.name} - ${user.username} - ${user.email} <br>
      `;
    }
  );

  result.innerHTML = htmlStr;
}


commToServer();
