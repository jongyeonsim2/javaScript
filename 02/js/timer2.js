// 실행 멈춤 조건 변수
let counter = 0;

let timer = setInterval( 
    //실행에 필요한 콜백 함수
    () => {
      console.log("Hello~~");
      counter++; // 실행 횟수 카운팅
      //5회 실행 후 중지.
      if (counter === 5)
        // 실행중인 함수의 식별자를 매개변수로 전달.
        // setInterval() 를 timer 변수에 할당함.
        clearInterval(timer);
    } // end of callback function
    , 2000
 );