/**
 * classlist-2.html 에서 사용하는 js file 임.
 */
const title = document.querySelector("#title");

title.onclick = () => {
  // if(!title.classList.contains("clicked")){
  //   // "clicked" style 이 적용이 되지 않았으면, 스타일 추가
  //   // title.classList.contains("clicked") => false
  //   title.classList.add("clicked");
  // } else {
  //   // "clicked" style 이 적용이 되었으면, 스타일 삭제
  //   title.classList.remove("clicked");
  // }

  // classList. toggle() 을 사용하면 더 편리함.
  title.classList.toggle("clicked");
}



