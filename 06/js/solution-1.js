// mouseover, mouseout event 활용
// 이미지 요소 선택

const img = document.querySelector("#container > img");

// mouseover
img.addEventListener(
  "mouseover" ,
  () => {
    img.src = "images/pic-4.jpg"
  }
);

// mouseout
img.addEventListener(
  "mouseout" ,
  () => {
    img.src = "images/pic-6.jpg"
  }
);