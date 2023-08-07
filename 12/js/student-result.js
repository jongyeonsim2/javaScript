
// XMLHttpRequest  객체생성
let xhr = new XMLHttpRequest();

// 요청 초기화
xhr.open("GET", 'student.json', true);

// 서버에 전송
xhr.send();

xhr.onreadystatechange = () => {
  // readyState 가 4 , status 가 200 체크
  if (xhr.readyState === 4 && xhr.status ===200 ) {
    // json 데이터를 객체로 변환
    let student = JSON.parse(xhr.responseText);

    // html 문서에 출력할 요소 지정
    document.getElementById("result").innerHTML =
    `
      <h1>${student.name}</h1>
      <ul>
        <li>전공명 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
    `;
  }
};