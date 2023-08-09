
/***
 * ============================== 자판기 프로그램 공통 데이터
 */
/***
 * 1. 현금 정보
 *    - 화면의 버튼의 데이터로 사용
 */
const conins = [100, 500, 1000, 5000, 10000];


/***
 * 2. 자판기 상품 정보
 *    - 화면의 버튼의 데이터로 사용
 */
const drinks = [
  {
    drinkId : "1",
    drinkName : "코카콜라",
    price : 900,
    stock : 5,
  },
  {
    drinkId : "2",
    drinkName : "오렌지주스",
    price : 1200,
    stock : 5,
  },
  {
    drinkId : "3",
    drinkName : "커피",
    price : 700,
    stock : 5,
  },
];


/***
 * 3. 잔액 관련 정보
 */
// 자판기 총 잔액
let totalVendingBalance = 1000;

// 내 지갑 잔액
let totalMyBalance = 10000;

// 음료수를 구입하기 위해 투입한 잔액
let totalInsertBalance = 0;


/***
 * =================== 동전 투입 Main 함수 => 하나의 함수로 구현 => 구조화 적용하지 않음.
 */



/***
 * =================== 음료수 구입 Main 함수 => Handler 함수와 함께 구현. => 구조화 적용.
 */


/***
 * =================== 동전 투입 관련 Handler 함수 ( UI, Exception ) => 구현 하지 않음.
 */


/***
 * =================== 음료수 구입 관련 Handler 함수 ( UI, Exception ) => 구현되어 있음.
 */



/***
 * ============================== 화면 초기화 관련 함수 ==============================
 */

/***
 * 동전 버튼을 화면에 출력하는 함수
 */
function renderCoinButtons() {
  // 배열 join() : 문자열 배열을 다시 문자열로 변환.
  const buttonArr = [];
  for (const coin of conins) {
    buttonArr.push(
      `<button onclick=";" class="coinButton">${coin} 원 투입</button>`
    );
  }

  //join() 를 사용해서, button 요소들을 모두 문자열로 변환.
  document.getElementById("divCoins").innerHTML = buttonArr.join("");
}


/***
 * 음료 버튼을 화면에 출력하는 함수
 */
function renderDrinkButtons() {
  const buttonArr = [];
  for (const drink of drinks) {
    buttonArr.push(
      `<button onclick=";" id="btnDrink${drink.drinkId}" class="drinkButton">
      ${drink.drinkName}
      (${drink.price}원, 재고수
          <span id="drinkStock${drink.drinkId}">${drink.stock}</span>)
      </button>`
    );
  }

  //join() 를 사용해서, button 요소들을 모두 문자열로 변환.
  document.getElementById("divDrinks").innerHTML = buttonArr.join("");
}

/***
 * 브라우저 화면이 로딩이 될 때, 화면 초기화를 수행하는 함수.
 */
window.addEventListener("load" , function () {
  renderCoinButtons();
  renderDrinkButtons();
});