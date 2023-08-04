
// 신청한 수강 교과목.
// 중복된 교과목 있음. => 중복된 데이터 처리를 어떻게 ???

// 배열은 데이터가 중복이 가능.
const class1 = ["HTML", "CSS"];
const class2 = ["CSS", "자바스크립트", "리액트"];
const class3 = ["자바스크립트", "타입스크립"];

// 결과 화면에 출력한 데이터는 중복을 배제. 
// 배열과 비슷하면서, 중복을 제거하는 자료구조를 사용. => Set

//1. class1, class2, class3 합쳐야 함. => 전개 변수
const subjects = [...class1, ...class2, ...class3];

//2. 중복 배제 => Set 에 데이터를 저장. => 중복배제 처리가 자동으로 됨.
const resultSet = new Set();

subjects.forEach(
  subject => {
    resultSet.add(subject);
  }
);

console.log(resultSet);

//3. Html 요소를 만들어서 화면 출력
//   배열의 변형 메소드 중에서 map를 사용 => 
//          Set 의 모든 요소에 동일한 처리(li tag 적용)를 하도록 함수로 구현.
const result = document.querySelector("#result");

result.innerHTML = `
  <ul>
  ${
      [...resultSet]
      .map(subject => `<li>${subject}</li>`).join("")
  }
  </ul>
`;
