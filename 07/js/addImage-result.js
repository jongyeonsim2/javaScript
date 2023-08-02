// 시간정보 취득
const today = new Date(); 
const hr = today.getHours();
const milliseconds = today.getMillisconds();

// 이미지 출력 지정
const container = document.querySelector("#container");

// 이미지 요소 추가
let newImg = document.createElement("img");

// 오전 오후 에따른 이미지 설정
newImg.src = (milliseconds < 500) ? "images/morning.jpg" : "images/afternoon.jpg";

// 부모 노드에 추가된 이미지 노드 추가
container.appendChild(newImg);
