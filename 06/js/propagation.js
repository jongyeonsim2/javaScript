//이벤트 전파 - 이벤트 버블링

const elements = document.querySelectorAll("*");

// 각 요소에 이벤트 등록
for ( let element of elements){
  element.addEventListener(
    "click" ,
    e => {
      console.log(
        `event.target : ${e.target.tagName}, 
        evetn.curentTarget : ${e.currentTarget.tagName}`
      )
    }
  );
}