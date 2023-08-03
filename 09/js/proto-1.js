/**
 * - 생성자 함수 
 *   자바 언어와 달리 클래스 외부에 함수 형태로 생성자를 선언할 수 있음.
 * - 프로토타입
 *   실제 구현하는 대상은 아님. => 자동으로 생성된다는 의미를 가짐.
 * 
 * - 중요한 포인트
 *   생성자 함수를 선언하는 순간 자동으로 프로토 타입 객체가 생성이됨.
 */

// 생성자 함수를 작성하면, 프로토 타입 객체가 생성되어서 사용할 수 있게 됨.
function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    this.done === false ? str = "읽는 중" : str = "완독";
    return str;
  }
}

const book1 = new Book("자바스크립트", 700, true);