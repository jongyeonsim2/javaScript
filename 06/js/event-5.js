
// 버튼 요소 선택
const button = document.querySelector("#bttn");

// 버튼 요소에 이벤트 리스너를 추가, 콜백 함수 구현
// 첫 번째 매개변수는 표 6-2를 참조.
// 두 번째 매개변수는 콜백 함수 구현
button.addEventListener(
  "click" ,
  () => {
    const word = document.querySelector("#word").value;
    const result = document.querySelector("#result");
    let count = word.length;

    result.innerText = `${count}`;
  }
);
