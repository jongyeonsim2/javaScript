//이벤트 전파 - 이벤트 캡처링

const elements = document.querySelectorAll("*");

// 각 요소에 이벤트 등록
for ( let element of elements){
  /**
   * addEventListener 의 세번째 매개변수
   *  기본적으로 false 사용, 
   *  이벤트 캡처링을 사용 : true 로 변경.
   */
  element.addEventListener(
    "click" ,
    e => {
      console.log(
        `event.target : ${e.target.tagName}, 
        evetn.curentTarget : ${e.currentTarget.tagName}`
      )
    } ,
    true
  );
}