
// 1. json 데이터가 여러건인 경우 재사용을 고려.


/**
 * 2. 객체 배열( 이터러블 객체 )인 경우 처리. 
 *    2.1 이터러블 객체 : 순차적으로 처리할 수 있는 유형의 데이터.
 *                       배열, Set, Map 등
 *                       for ... of ...
 * 
 *    2.2 배열에서 순회하기 : forEach()
 *  
 */

let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 재사용을 높이기 위해, 함수로 구현.
    // writeHTML();
    let students = JSON.parse(xhr.responseText);
    writeHTML(students);
  }
};

function writeHTML(studentsObj) {

  let output = "";

  // for (let sutdent of studentsObj) {
  //   output += `
  //     <h2>${sutdent.name}</h2>
  //     <ul>
  //       <li>전공명 : ${sutdent.major}</li>
  //       <li>학년 : ${sutdent.grade}</li>
  //     </ul>
  //     <hr>
  //   `;
  // }

  studentsObj.forEach(function (student) {
    output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공명 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
    `;
  });



  document.getElementById("result").innerHTML = output;
}