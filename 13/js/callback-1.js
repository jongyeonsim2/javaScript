/**
 * 커피 주문 프로그램 구현 
 * => 콜백 함수를 이용해서 비동기 프로그래밍으로 구현
 * 1. 커피 종류를 주문 받음. 아메리카노.
 * 2. 주문 접수를 출력. 아메리카노 주문 접수.
 * 3. 3초 지나서, 
 * 4. 완료 상태를 출력. 아메리카노 준비 완료.
 * 
 */

// 주문 함수 구현
function order(coffee, callback) {
  console.log(`${coffee} 주문 접수`); // 1,2 번 요구사항
  
  setTimeout( // 3, 4, 요구사항
    () => {
      callback(coffee);
    }, 3000
  );

}

// 완료 상태 함수 구현
function finish(coffee) {
  console.log(`${coffee} 준비 완료`); // 4 번 요구 사항
}

// 사용자( 함수를 호출하는 쪽 )
// 주문 함수 ( 커피 종류, 콜백 함수 )
order("아메리카노", finish);// 1 번 요구 사항


