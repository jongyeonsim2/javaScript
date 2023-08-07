

/**
 * 예외 처리 기준
 * 
 *  1. 숫자 이외의 데이터가 입력된 경우. => 예외 발생 => alert()
 *     "숫자를 입력하세요."
 * 
 *  2. 10보다 큰 숫자가 입력된 경우. => 예외 발생 => alert()
 * 
 *  3. 1, 2 의 기준이 아닌 경우. => 화면에 입력 숫자 출력
 *     
 *  4. 입력된 데이터 초기화 => finally
 * 
 * 
 * 입력된 데이터는 문자임. => 숫자 변환해야 함.
 * - Number() 함수 사용.
 * - parseInt() 함수 사용.
 * 
*/

const inputNum = document.querySelector("#user-number");
const btn = document.querySelector("button");

btn.addEventListener(
  "click", () => {
    let num = inputNum.value;

    try {
      // 숫자로 입력되지 않은 경우.
      if ( num === "" || isNaN(num) ) {
        throw "숫자를 입력하세요";
      }

      // 문자 숫자를 숫자 데이터로 변환
      num = parseInt(num);

      // 10보다 큰 숫자가 입력된 경우.
      if (num > 10) {
        throw "10보다 작은 숫자를 입력하세요."
      }

      // 10보다 작은 숫자가 입력된 경우.
      if (num <= 10) {
        document.querySelector("#result").innerText = num;
      }

    } catch (err) {
      alert(err);
    } finally {
      inputNum.value = "";
    }




  }
);
