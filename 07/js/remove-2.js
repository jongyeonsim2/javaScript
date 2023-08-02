// 리스트의 어떤 아이템이 삭제가 될지 모르기때문에
// 모든 리스트의 아이템을 가져옴.
const items = document.querySelectorAll("li");

for ( let item of items) {
  item.addEventListener(
    "click", 
    // this 를 사용하는 경우는 화살표 함수를 사용 못함. 
    // () => {
    //   this.remove();
    // }
    function () {
      this.remove();
      //this.parentNode.removeChild(this);
      /**
       * this.parentNode.removeChild(this);
       * 
       * this : li
       * this.parentNode : ul
       * removeChild(this) : 현재 선택된 자식이 누군인지 명시.
       */
    }
  );
}