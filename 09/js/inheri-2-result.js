// 클래스 기반의 상속 : extends 키워드를 사용
// 클래스 선언
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(
      `${this.title} 를 ${this.price} 가격으로 구입.`
    );
  }
}

// 객체 생성 및 함수 호출
const book1 = new BookC("자바스크립트", 30000);
book1.buy();



// 기존 클래스를 상속해서 새로운 클래스 선언.
// extends keyword 를 사용해서 구현.
class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextbook() {
    console.log(
      `${this.major} - ${this.title}` 
    );
  }
}

// 객체 생성 및 함수 호출
const book2 = new TextbookC("스프링부트", 50000, "컴퓨터공학전공");
book2.buyTextbook();
book2.buy();