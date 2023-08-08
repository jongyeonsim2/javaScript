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
 * 2. 프로미스로 유지 보수가 좋게 구현.
 *    step1, step2, step3 를 변수로 선언해서,
 *    이 각각의 변수에 해당하는 콜백 함수를 구현하면 됨.
 * 
 * 3. then()을 이용해서 메소드 체이닝으로 비동기 프로그래밍을 구현.
 * 
 */

//1. promise 구현 => promise 객체가 반횐되록 해야함.
const pizza = () => {
  return new Promise(
            (resolve, reject) => {
              resolve("피자 주문 시작");
            }
          );
};


//2. 각 조리단계변로 해야할 일을 정의해서, step1 ~ step3 로 선언.
const step1 = (msg) => {
  console.log(msg);
  return new Promise(
     (resolve, reject) => {
        setTimeout(
          () => {
            resolve("피자 도우 준비");
          }, 2000
        )
      }
  );
};

const step2 = (msg) => {
  console.log(msg);
  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          resolve("토핑 준비 완료");
        }, 1000
      )
    }
  );
};

const step3 = (msg) => {
  console.log(msg);
  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          resolve("굽기 완료");
        }, 2000
      )
    }
  );
};


//3. promise 사용.
//   then()을 이용해서 메소드 체이닝으로 구현.

//   메소드 체이닝 으로 구현하는 이유는 조리단계별로 진행시키도록 하기 위함.
//   => 비동기 프로그래밍

pizza().then( (result) => step1(result) )//step1 처리 후, promise 객체가 반환되도록 해야함.
      .then( (result) => step2(result)) //step2
      .then( (result) => step3(result) ) //step3
      .then( (result) => console.log(result) )
      .then(
        () => {
          console.log("피자 준비 완료");
        }
      );
