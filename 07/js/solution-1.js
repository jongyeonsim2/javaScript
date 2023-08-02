
// 참가자 이름 지정
const usernmae = document.querySelector("#username");

// 참가자 전공 지정
const major = document.querySelector("#major");

// 저장 버튼 지정
const btn = document.querySelector("form > button");


// 저장 버튼 이벤트 등록
// Html 요소중에서 table의 tr, td 추가 구현
btn.addEventListener (
  "click", 
  (e) => {
    e.preventDefault();

    // table 요소의 tbody 요소를 지정
    let tbody = document.querySelector("#attendant > tbody");

    // tr tag 요소 생성
    let newTr = document.createElement("tr");

    // 참석자 이름을 표시할 td tag 요소 생성.
    let nameTd = document.createElement("td");
    nameTd.innerText = username.value;
    usernmae.value = "";

    // 참석자의 전공을 표시할 td tag 요소 생성.
    let majorTd = document.createElement("td");
    majorTd.innerText = major.value;
    major.value = "";

    // 위에서 생성한 tr과 td 요소의 관계를 설정.
    newTr.appendChild(nameTd);
    newTr.appendChild(majorTd);

    // 위에서 관계가 설정된 tr 요소를 table 의 tbody 와 관계 설정.
    tbody.appendChild(newTr);

  }
)