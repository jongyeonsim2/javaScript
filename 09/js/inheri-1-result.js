/**
 * inheri-1-result.js
 */

// 생성자 함수 선언 => 프로토타입 객체로 사용
function Book (title, price) {
  this.title = title;
  this.price = price;
}
// 생성자 함수 외부에서 함수 정의
Book.prototype.buy = function() {
  console.log(
    `${this.title} 를 ${this.price} 가격으로 구입.`
  );
}

// 객체 생성 함수 테스트
const book1 = new Book("Vue.js 3판", 30000);
book1.buy();


// *** 중요한 포인트 1 *** 
// 위에서 생성된 프로토타입 객체를 재사용 => 
// 프로토타입 상속 => 퍼로퍼티를 신규 추가.
// 생성자 함수 선언
function Textbook(title, price, major) {
  // 중요한 포인트 1 : 기존 퍼로퍼티 재사용 => Book 을 재사용
  // 프로토 타입 상속
  Book.call(this, title, price);
  this.major = major;
}

// 생성 함수 외부에서 함수 정의
Textbook.prototype.buyTextbook = function () {
  console.log(
    `${this.major} - ${this.title}` 
  );
}

// *** 중요한 포인트 2 *** 
// 프로토타입 연결 설정
// Book( 부모 ), Textbook( 자식 )
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// 객체 생성 함수 테스트.
const book2 = new Textbook("스프링 정석", 40000, "컴퓨터 공학 전공");

// Textbook 함수 호출
book2.buyTextbook();

// Book 함수 호출
book2.buy();