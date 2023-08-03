// 생성자 함수
function newBook(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}

// 함수 외부에서 프로토타입을 이용해서 생성자 함수의 메소드를 정의함.
newBook.prototype.finish = function () {
  this.done === false ? str = "읽는 중" : str = "완독";
  return str;
}

const newbook1 = new newBook("자바스크립트", 700, true);

