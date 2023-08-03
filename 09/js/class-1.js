//클래스를 이용한 객체 생성
class Book2 {
  // constructior 함수
  constructor(title, pages, done = false) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  // 멤버 함수
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}

//객체 생성 및 사용
const book1 = new Book2("자바 스크립트 상", 500, true);
const book2 = new Book2("자바 스크립트 하", 450, false);

console.log(
  `${book1.title} - ${book1.pages} - ${book1.finish()}`
);

console.log(
  `${book2.title} - ${book2.pages} - ${book2.finish()}`
);