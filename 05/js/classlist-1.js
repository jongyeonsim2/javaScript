/**
 * classlist-1.html 에서 사용하는 js file 임.
 */

const title = document.querySelector("#title");

title.onclick = () => {
  // css style를 추가
  title.classList.add("clicked");//재사용.
};