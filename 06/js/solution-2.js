const btn = document.getElementById("bttn");
const nav = document.getElementById("nav");

// css 의 스타일을 적용, 메뉴의 표시를 제어
btn.addEventListener(
  "click",
  () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
  }
);