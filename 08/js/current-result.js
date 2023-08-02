// 전자 시계를 구현

// 오늘날짜 지정
const today = new Date();

// 전자 시계의 날짜 영역 표시
const displayDate = document.querySelector("#today");

// 연도, 월 , 날짜 , 요일 정보 지정, 요일명을 지정
const year = today.getFullYear(); //연도
const month = today.getMonth() + 1; //(0 ~ 11) + 1
const date = today.getDate(); //날짜
const day = today.getDay(); //요일 (0 ~ 6), 0 : 일요일

let dayResut = " ";

// 요일명으로 변경 처리.
switch(day) {
  case 0 :
    dayResut = "일요일"; break;
  case 1 :
    dayResut = "월요일"; break;
  case 2 :
    dayResut = "화요일"; break;
  case 3 :
    dayResut = "수요일"; break;
  case 4 :
    dayResut = "목요일"; break;  
  case 5 :
    dayResut = "금요일"; break;
  case 6 :
    dayResut = "토요일"; break;
}

displayDate.innerHTML = 
  `${year}년 ${month}월 ${date}일
    <span style="font-weight:bold">${dayResut}</span>
  `;



// 시간 영역 지정
const displayTime = document.querySelector("#clock");

let clock = () => {
    // 시, 분, 초 지정, AM or PM 지정
    let currentTime = new Date();
    let hh = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    // AM, PM prefix 처리
    let prefix = "AM";
    if (hh === 0) {
      hh = 12;
    } else if (hh > 12) {
      hh = hh - 12;
      prefix = "PM";
    }

    // 시, 분, 초가 한 자리 단위인 경우, 두 자리로 지정.
    hh = (hh<10) ? "0" + hh : hh;
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;

    // 시간 정보를 형식에 맞추어서 문자열로 정리.
    displayTime.innerText = `${prefix}   ${hh} : ${min} : ${sec}`;
}


// 1초 단위로 변경된 시간 정보가 출력되도록 해야 함.
setInterval(clock, 1000);




