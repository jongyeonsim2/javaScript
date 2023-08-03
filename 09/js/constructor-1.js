
// 생성자 함수 정의하기
function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function() { // 변수에 함수를 할당
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}

// 생성자 함수를 이용한 객체 생성
const book1 = new Book("자바 스크립트 상", 500, true);
const book2 = new Book("자바 스크립트 하", 450, false);

console.log(
  `${book1.title} - ${book1.pages} - ${book1.finish()}`
);

console.log(
  `${book2.title} - ${book2.pages} - ${book2.finish()}`
);