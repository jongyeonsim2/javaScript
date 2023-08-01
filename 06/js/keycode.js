// 이벤트 발생은 body 전체가 됨.
const body = document.body;
const result = document.querySelector("#result");

body.addEventListener(
  "keydown",
  (e) => {
    result.innerTest = 
    ` code : ${e.code}, key : ${e.key} `;
  }
);