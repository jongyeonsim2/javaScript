
// 피자 주문 프로그램을 promise 방식의 비동기 프로그래밍으로 구현

// true, false => 성공, 실패 용도로 사용
let orderPizza = true;//false 로 변경해서 테스트

// 1. promise 객체 : resolve, reject => 제작 코드
const pizza = new Promise( (resolve, reject) => {
    if (orderPizza) // 성공
      resolve("피자 주문 성공");
    else //실패
      reject("피자 주문 실패");
  }
);

// 2. 구현한 promise 를 사용. : then(), catch() => 소비 코드
