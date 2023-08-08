/**
 * 1. 피자를 만드는 과정
 *    피자 주문 -> 
 *    =====> 실제 조리 단계는 여기부터임. 
 *    피자 도우 준비( 2초 ) ->                   step1
 *    토핑 완료( 1초 ) ->                        step2
 *    굽기 완료( 2초 ) ->                        step3
 *    =====> 실제 조리 단계가 완료되는 것은 여기까지임.
 *    피자 준비 완료
 * 
 * 2. 콜백 메소드로 유지 보수가 좋게 구현.
 *    step1, step2, step3 를 변수로 선언해서,
 *    이 각각의 변수에 해당하는 콜백 함수를 구현하면 됨.
 * 
 * 3. 콜백 메소드로 비동기 프로그래밍을 구현.
 * 
 * 
 */


const step1 = (callback) => {
  setTimeout(() => {
        console.log("피자 도우 준비");
        callback(); // step2 가 호출이 됨.
      },2000
  );
}


const step2 = (callback) => {
  setTimeout(() => {
      console.log("토핑 완료");
      callback(); // step3 가 호출이 됨.
    },1000
  );
}


const step3 = (callback) => {
  setTimeout(() => {
      console.log("굽기 완료");
      callback(); // 자기 자신의 콜백 함수 호출
    },2000
  );
}



console.log("피자 주문 시작");

// 실제 조리 단계가 시작 => 콜백 함수 형식으로 만들어야 함.
step1(
  function() {
    step2(
      function() {
        step3(
          function() {
            console.log("피자 준비 완료");
          }
        )
      }
    )
  }
);