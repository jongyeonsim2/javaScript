
// 버튼 지정
const btn = document.querySelector("#bttn");

// 공지 사항 표시 영역 지정
const notiBox = document.querySelector("#noti-box");


// 버튼 이벤트 구현
btn.addEventListener(
  "click",
  () => {
    const noti = document.createElement("div");
    // 추가된 공지 사항에 css style 를 적용.
    noti.classList.add("noti");
    noti.innerText = "알림 내용입니다.";
    notiBox.appendChild(noti);

    // click 이벤트가 발생하면, 공지 사항이 표시되고,
    // 표시 후 3초 후에 공지 삭제
    setTimeout(
      () => {
        noti.remove();
      }, 3000
    )
  }
);


