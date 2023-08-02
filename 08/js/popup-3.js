
// 팝업창의 중앙 위치 계산 후 열기

const btn = document.querySelector("button");
const popWidth = 600;
const popHeight = 500;

btn.addEventListener(
  // screen 객체에서 사용 가능한 폭과 넓이를 이용해서
  // 팝업 창이 모니터 중앙에서 open 되도록 위치를 계산.
  "click", function () {
    // 높이 계산, 위에서 50px 떨어진 위치에 창을 open 하겠다.
    let top = ( screen.availHeight - popHeight ) / 2; //50px
    // 왼쪽 계산, 왼쪽에서 200px 떨어진 위치에서 창을 open 하겠다.
    let left = ( screen.availWidth - popWidth ) / 2; //200px

    window.open(
      "notice.html", "event", 
      `width=${popWidth} height=${popHeight} top=${top} left=${left}`
    );
  }

);