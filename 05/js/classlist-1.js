/**
 * classlist-1.html 에서 사용하는 js file 임.
 */

const title = document.querySelector("#title");

title.onclick = () => {
  // css style를 추가
  // js-css.js( 코드레벨에서 style 적용 ) 와 비교 => 재사용 하지 않음.
  // 현재는 css style file에 정의한 style을 사용. => 재사용함.
  // 현재와 같은 방식으로 구현하는 것을 권장.
  title.classList.add("clicked");//재사용.
};