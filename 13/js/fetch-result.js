
/**
 * fetch API 를 이용한 통신( 로컬의 JSON 데이터로 사용 )
 * - 성공한 경우를 처리 => .then() 구현
 * - JSON data 를 객체로 변환( parsing )
 * 
 * 1. XMLHttpRequest() 객체 생성
 * 2. open() 요청 초기화
 * 3. send() 서버에 전송
 * 4. XMLHttpRequest() 객체 반환
 * 5. 4, 200 코드 확인
 * 6. JSON data 를 객체로 변환( parsing )
 *  
 */

fetch("student-2.json") // promise 가 반환됨.
  .then( response => response.json() )          // promise 가 반환된 후 then 을 넘겨주는 것은 response( 통신 )
  .then( 
      students => { //학생 객체 배열
        let output = ""; //html 용

        students.forEach (
          student => {
            output += `
              <h2>${student.name}</h2>
              <ul>
                <li>전공명 : ${student.major}</li>
                <li>학년 : ${student.grade}</li>
              </ul>
              <hr>
            `;
          }
        );  // 학생 객체 배열을 이용해서 html 리스트 작성

        // 작성된 html를 화면에 출력
        document.querySelector("#result").innerHTML = output;
      }
   )
   .catch(error => console.log(error)); // 서버와 통신을 함으로 반드시 catch() 해야 함.