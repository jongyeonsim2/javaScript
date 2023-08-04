class Lecture {
  constructor(hasTutor, lectID, members) {
    this.hasTutor = hasTutor;  //학급에 튜터가 있는지(T), 없는지(F)
    this.lectID = lectID;       //학급 ID
    this.members = members;     //학급에 속한 학생들
  }
}

// 함수 : 튜터와 학생을 구분, 매개변수 Lecture의 객체
function getTutorStudent(classRoom) {
  // 구조 분해 할당 적용 : class의 key 명과 동일한 변수명 사용.
  let {hasTutor, lectID, members} = classRoom;

  // members에서 튜터와 학생을 구분 => hasTutor 가 T 이면, 튜터 존재
  // 디스트럭팅A(hasTutor가 true), 디스트럭팅B(hasTutor가 false)을 적용
  let tutor, sutdents;
  //          디스트럭팅A                       디스트럭팅B
  hasTutor ? [tutor, ...students] = members : [...students] = members;

  return students;
}

// 튜터가 없는 학급
let calss1 = new Lecture(false, "C001", ["toutor1","s1","s2"]);
// 튜터가 있는 학급
let calss2 = new Lecture(true, "C002", ["toutor2","s3","s4"]);

// 튜터가 없는 학급
console.log(`학급명 : ${calss1.lectID} , 학생들 : ${getTutorStudent(calss1)}`);
// 튜터가 있는 학급
console.log(`학급명 : ${calss2.lectID} , 학생들 : ${getTutorStudent(calss2)}`);




