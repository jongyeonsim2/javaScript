/**
 * 
 *  동기 처리
 * 
 */

function displayA() {
  console.log("A");
}

function displayB(callback) {
  //console.log("B");

  // 비동기 프로그래밍 아님.
  // setTimeout(
  //   () => console.log("B"), 3000
  // );

  // 비동기 프로그래밍으로 구현. 콜백 함수 방식
  setTimeout(
    () => {
      console.log("B");
      callback(); //=> displayC();
    }, 3000
  );

}

function displayC() {
  console.log("C");
}

displayA();
// displayB();  
// displayC(); // B 보다 C 가 먼저 출력이 됨.
displayB(displayC);

/**
 *   현재 출력 순서는 A -> C -> B  이지만,
 *   원하는 순서는 A -> B -> C 로 처리 순서를 제어하고 싶음.
 *   => 원하는 처리 순서에 맞게 프로그래밍을 해야 함. => 비동기 처리.
 * 
 *   콜백 함수 방식
 */
