// 날짜 계산, 과거의 임의의 날짜로 부터 오늘까지 몇 일이 지났는지 계산.

// 계산 결과 영역 지정
const result = document.querySelector("#result");

// 임의의 과거 날짜 지정
const startDay = new Date("2023-01-01");

// 오늘 날짜 지정
const toDay = new Date();

// 흐른 날짜 계산 => 밀리초로 계산
let passedTime = toDay.getTime() - startDay.getTime();

// 위에서 계산한 밀리초를 일수로 계산
let passedDay = Math.round(passedTime / ( 1000 * 60 * 60 * 24 ));

result.innerText = passedDay;