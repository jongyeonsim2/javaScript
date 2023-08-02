// 주문정보 영역 지정
const orderInfo = document.querySelector("#orderInfo");

// 버튼 요소 지정
const orderBtn = document.querySelector("#order");

// 책 제목의 요소 지정
const title = document.querySelector("#container > h2");

orderBtn.addEventListener(
  // addEventListener의 3번째 매개변수 => false 가 default.
  // 현재 구현한 화살표 함수를 한 번만 실행하는 옵션.
  // once 를 true 로 변경하면, 구현된 화살표 함수는 한 번만 실행됨.
  "click" ,
  () => {
    // 요소가 될 신규 노드를 추가
    let newP = document.createElement("p");

    // 속성을 저장할 신규 노드를 추가
    let textNode = document.createTextNode(title.innerText);

    // 노드간의 관계 설정
    newP.appendChild(textNode);

    // 스타일 적용
    newP.style.fontSize = "1em"; //16px
    newP.style.color = "red";

    // 부모 노드와 연결
    orderInfo.appendChild(newP);
  }, 
  {once : true} // 3번째 매개변수. 화살표 함수를 한 번만 실행되게 됨.
);




