
/**
 * 1. promise 연습
 *    callback 방식의 커피 주문 프로그램을 promise 로 재구현.
 * 2. 커피 주문시 커피 종류를 입력 받음
 * 3. 주문 접수 내용을 html 요소로 출력
 * 4. 성공 및 실패에 따른 css 적용
 *    4.1 성공
 *        커피 준비 완료까지 3초 소요.
 *        주문 접수 내용을 비활성화
 *        커피 준비 완료 내용 활성화
 *    4.2 실패
 *        주문 취소 출력.
 */

// promise 객체 생성
const order = new Promise(
  (resolve, reject) => {

    // 주문 접수 창 open
    let coffee = prompt("커피 종류는?","아메리카노");

    // 주문 접수 성공( 커피 주문 창에서 확인 버튼 누른 경우 )
    if(coffee != null && coffee != "")
    {
      //요구사항 3번 : 주문 접수 내용을 html 요소로 출력
      document.querySelector(".start").innerText =
        `${coffee} 주문 접수`;

      //요구사항 4번
      //커피 준비 완료까지 3초 소요.
      //주문 접수 내용을 비활성화
      //커피 준비 완료 내용 활성화
      setTimeout(
        () => {
          resolve(coffee);
        }, 3000
      );

    } else {
      // 주문 접수 취소(실패)( 커피 주문 창에서 취소 버튼 누른 경우 )
      reject("커피 주문 취소");
    }

  }
);


// promise 객체 사용.
// 성공(orderSuccess)과 실패(orderCancle)에 따른 콜백 함수 정의.
function orderSuccess(result) {
      //요구사항 4번
      //커피 준비 완료까지 3초 소요.  =>  promise 에서 구현
      //주문 접수 내용을 비활성화
      //커피 준비 완료 내용 활성화

      document.querySelector(".end").innerText = 
        `${result} 준비 완료`;
      
      document.querySelector(".end").classList.add("active");
      document.querySelector(".start").classList.add("done");
}

function orderCancle(err) {
  document.querySelector(".start").innerText = err;
}

/**
 * promise 객체를 사용하는 쪽.
 *   - then, catch() 메소드를 구현.
 *   - 기능이 크지면, 함수로 뽑아냄. => 콜백 함수.
 * 
 * order :  promise 객체 참조변수.( 쉽게 보면, promise 객체 )
 *    
 * 메소드 체이닝 : order.then().catch()
 */
order
.then(orderSuccess) // promise.then() => promise 객체
.catch(orderCancle);// promise.catch() => catch를 사용하고 처리가 끝남.