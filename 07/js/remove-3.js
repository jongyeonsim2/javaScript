// 현재 button 이 아닌, span tag 에 이벤트를 등록 하기 위해서
// span 요소를 모두 가져와야 함.
const buttons = document.querySelectorAll("p > span");

for(let button of buttons){
  button.addEventListener(
    "click", 
    function () {
      // 클릭 이벤트가 발생한 대상은 span tag임.
      // 도서 삭제를 위해서 도서를 선택 => p tag 의 컨텐츠.
      // 그래서, span 의 부모 요소를 지정
      this.parentNode.remove();
      //this.remove(); => button만 삭제됨.
    }
  );
}