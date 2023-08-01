
// 수강 신청시 선택한 학과 정보를 사용자에게 알림.

// 학과 요소를 선택.
const selectMenu = 
  document.querySelector("#major");

// 알림 기능의 콜백 함수 구현.
function displaySelect() {
  // 
}

// 선택 변경 이벤트 발생시 알림 기능 추가.
selectMenu.onchange = displaySelect;