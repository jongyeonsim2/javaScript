// 전철 노선도 만들기
// 제너레이터 함수로 구현.

//1. 경강선 노선을 제너레이터 함수로 구현 => next() 사용이 목적.
function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

let gen = train();

//2. 버튼의 클릭 이벤트 등록
//   구현된 제너레이터 함수의 next() 를 이용
const btn = document.querySelector("button");
const result = document.querySelector("#result");

btn.addEventListener(
  "click", () => {

    let cur = gen.next(); // value, done 반환.

    if(cur.done !== true) {  // 다음 값이 있음.
      result.innerHTML = cur.value;
    } else {  // 다음이 없음. 더이상 읽을 데이터가 없음.
      result.innerHTML = "종점";

      // 첫 번째 매개 변수 퍼로퍼티, 두 번째 매개변수 값.
      btn.setAttribute("disabled", "disabled");
    }

  }
);