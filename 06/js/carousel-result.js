
// 이미지 전환 회전목마

// 이미지 출력을 위한 요소 지정.
const container = 
  document.querySelector("#container");

// 그림 목록, 현재 그림을 기준으로 이전과 이후 그림을 선택.
const imgList = [
  "pic-1.jpg", "pic-2.jpg","pic-3.jpg",
  "pic-4.jpg","pic-5.jpg","pic-6.jpg"
];

// 그림의 저장 경로
container.style.backgroundImage =
  `url(images/${imgList[0]})`;

// 화살표 : 그림 전환용
const arrows = document.querySelectorAll(".arrow");

let idx = 0;

// 화살표에 클릭 이벤트 등록
arrows.forEach (
  arrow => {
    // 이벤트 등록
    arrow.addEventListener(
      "click",
      (e) => { //클릭 이벤트에 대한 콜백 함수 

        // 이벤트 객체에서 target 속성을 이용.
        // target 는 이벤트가 발생한 대상을 반환.

        // 왼쪽 화살표를 클리했는지를 확인.
        if(e.target.id === "left") {
           idx--; // 이전 이미지의 위치 정보
           // 첫 번째 이미지인 경우는 마지막으로 이동
           if (idx < 0) {
            idx = imgList.length - 1;
           }
        } else if (e.target.id === "right") {
          idx++;
          // 마지막 이미지인 경우
          if ( idx > imgList.length ) {
            idx = 0;
          }
        }

        // 결정된 위치정보에 해당하는 파일명을 배열에서 가져옴.
        // 가져온 파일명으로 컨테이너에 이미지를 출력.
        container.style.backgroundImage =
           `url(images/${imgList[idx]})`;
      }
    );
  }
);



// 왼쪽 화살표, 오른쪽 화살표 구분해서 동작  =>  이벤트 객체를 사용.
                                    // p.206 target 속성을 이용. 
// 이미지 목록에서 이전 및 이후의 이미지를 선택.
// 이미지 출력.

