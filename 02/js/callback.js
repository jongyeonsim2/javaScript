//callback.js
//a. html 문서에서 해당 요소를 가져옴.
const btn = document.querySelector("button");


//c. 이벤트가 발생할 경우에 실행할 기능을 함수로 구현. => 콜백 함수
//callback function
// function display() {
//   alert("clicked!!");
// }

/**
 * b. 해당 요소의 이벤트 발생여부를 확인하기 위해서, listener(모니터링) 를
        달아야 함.
        어떤 이벤트를 모니터링 할건지, 이벤트가 발생할 경우에 실행할 기능
 */
//버튼이 클릭이 되는것을 감시하고 있다가, 클릭이 발생하면 콜백 함수를 실행.
//btn.addEventListener("click", display);
btn.addEventListener("click", () => {alert("clicked!!");});

/**
 * 콜백 함수를 화살표 함수로 변경해서 사용
 * 
 * function display() {
  alert("clicked!!");
    }
 * 
 *  "매개변수 => 함수 내용" 형태로 변경
 * 
 *  display() => () // 매개변수 형태
 * 
 *  {
        alert("clicked!!");  => alert("clicked!!")  // 함수 내용 형태
    }

    () => alert("clicked!!");

    display 매개변수 대신에 화살표 함수로 변경.
    btn.addEventListener("click", display);

    btn.addEventListener("click", () => alert("clicked!!"));

 */



