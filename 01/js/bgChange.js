/**
 * bgChange.js
 */

function random(num) {
  return Math.floor(Math.random() * num);
}

function bgChange() {
  const chColor = 'rgb(' + random(255) + ',' + random(255) + ',' 
            + random(255) + ')';
  document.body.style.backgroundColor = chColor;
}

/* 브라우저 배경색 변경 함수 호출 및 실행. */
bgChange();