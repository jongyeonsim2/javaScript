
/**
 * 1. 피자 주문만 하는 프로그램
 * 2. promise 객체로 구현.
 * 3. 조리단계를 유지보수 편하게 메소드로 구현.
 * 4. pormise 객체를 사용.
 * 
 */

// Promise 객체 작성
// 생성된 Promise 객체를 반환해서 사용하도록 구현. 
const pizza = () => {
  return new Promise(
    (resolve, reject) => {
      resolve("피자를 주문시작");
    }
  );
};

// step1 조리 단계에서 할 부분만 정의
const step1 = (msg) => {
  console.log(msg);
};

// Promise 객체 사용
// resolve(then) 와 step1 을 연결.
/**
 * pizza(). => promise
 * promise.then()
 */
pizza().then( result => step1(result) );