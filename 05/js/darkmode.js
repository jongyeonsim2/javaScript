const btn = document.querySelector("button");

// 익명 함수 형태
btn.onclick = function () {
  // 문서 전체에 스타일을 적용하기 위해서,
  // body 를 기준으로 스타일을 적용. => 하위 자식도 함께 반영이 됨.
  document.body.classList.toggle("dark");
}

// 화살표 형태
btn.onclick = () => document.body.classList.toggle("dark");