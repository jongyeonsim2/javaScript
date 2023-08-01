/**
 * js-css.html 에서 사용하는 js file 임.
 */
//스타일을 변경할 요소를 선택
const title = document.querySelector("#title");

//클릭되었을 때, 스타일 적용
title.onclick = () => {
  // classlist-1.js 와 비교
  title.style.backgroundColor = "black";
  title.style.color = "white";
};