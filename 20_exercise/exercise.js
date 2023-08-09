
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
  {
    drinkId : "4",
    drinkName : "녹차",
    price : 900,
    stock : 0,
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
function insertCoin(coin) {
  // 주문 내역 영역 지정
  let printBuyHistory = document.getElementById("divBuyHistory");

  // 투입 금액이 내 지갑의 잔액보다 작거나 큰지 체크
  if (coin <= totalMyBalance) {
    // [비즈니스 로직] 지갑에서 투입하려는 금액만큼 각 잔액을 재 계산
    totalInsertBalance += coin;   // 투입 금액
    totalMyBalance -= coin;       // 내 지갑 잔액
    totalVendingBalance += coin;  // 자판기 잔액

    // [화면 - 음료수 버튼] 
    // 음료수 객체 배열에서 구입할 수 있는 음료수 버튼의 바탕색을 노란색으로 변경.
    for (let drink of drinks) {
      if (drink.price <= totalInsertBalance) {
        // css 파일에서 drink, active 두 가지를 적용.
        document.getElementById("btnDrink" + drink.drinkId).className =
          "drinkButton activeButton";
      }
    } 

    // [화면 - 자판기, 투입 금액, 내 지갑 잔액 input text의 value 수정]
    document.getElementById("totalInsertBalance").value = totalInsertBalance;
    document.getElementById("totalMyBalance").value = totalMyBalance;
    document.getElementById("totalVendingBalance").value = totalVendingBalance;

    // [화면 - 투입 금액 내역]
    printBuyHistory.insertAdjacentHTML(
      "beforeend",// 부모 요소안에서 자식 요소(P tag)들 중에서 마지막 자식 다음의 위치.
      `<p>${coin} 원이 투입 되었습니다.</p>`
    );

    printBuyHistory.insertAdjacentHTML(
      "beforeend",// 부모 요소안에서 자식 요소(P tag)들 중에서 마지막 자식 다음의 위치.
      `<p>총 투입 금액은 ${totalInsertBalance} 원 입니다.</p>`
    );

    printBuyHistory.insertAdjacentHTML(
      "beforeend",// 부모 요소안에서 자식 요소(P tag)들 중에서 마지막 자식 다음의 위치.
      `<p>현재 지갑에는 ${totalMyBalance} 원이 남았습니다.</p>`
    );

  } else {
    // 사용자 예외 처리
    // 내 지갑 잔액, 투입하려고 했던 금액 을 출력
    printBuyHistory.insertAdjacentHTML(
      "beforeend",// 부모 요소안에서 자식 요소(P tag)들 중에서 마지막 자식 다음의 위치.
      `<p>내 지값에 남아 있는 돈은 ${totalMyBalance} 원 입니다.</p>`
    );

    printBuyHistory.insertAdjacentHTML(
      "beforeend",// 부모 요소안에서 자식 요소(P tag)들 중에서 마지막 자식 다음의 위치.
      `<p>${coin} 원 을 투입할 수 없습니다.</p>`
    );

  }

  // 주문 내역 영역의 스크롤 바를 
  // 마지막에 추가된 메세지의 위치로 이동.
  printBuyHistory.scrollTop = printBuyHistory.scrollHeight;

}


/***
 * =================== 음료수 구입 Main 함수 => Handler 함수와 함께 구현. => 구조화 적용.
 */
function buyDrink(selectedDrinkId) {

  // 상품 객체 배열에서 클릭한 버튼의 상품 정보를 검색
  // 배열 filter()
  let drink = drinks.filter(
                             (d) => parseInt(d.drinkId) === parseInt(selectedDrinkId)
                          )[0];

  // [ 예외 처리 ] - 재고수량, 금액 등 체크
  let errorFlag = exceptionHandleForBuyDrink(drink);

  // 예외가 발생하지 않으면, 비즈니스 로직 처리 - 잔액 및 재고 변경
  if (!errorFlag) {

  }

  // [ 화면 처리 ]
  uiHandleForBuyDrink();

}




/***
 * =================== 동전 투입 관련 Handler 함수 ( UI, Exception ) => 구현 하지 않음.
 */
function uiHandleForInsertCoin() {

}

function exceptionHandleInsertCoin() {

}

/***
 * =================== 음료수 구입 관련 Handler 함수 ( UI, Exception ) => 구현되어 있음.
 */

/***
 * UI 처리 함수
 */
function uiHandleForBuyDrink() {

}

/***
 * Exception 처리 함수
 */
function exceptionHandleForBuyDrink(drink) {

  try {
    // 재고가 없는 경우
    if (drink.stock <= 0) {
      throw new Error(`<p>선택하신 음료 ${drink.drinkName} 는 재고가 없습니다.</p>`);
    }

    // 자판기 투입 금액보다 비싼 음료수를 구입하려는 경우
    if (totalInsertBalance < drink.price) {
      throw new Error(`<p>투입하신 금액은 총 ${totalInsertBalance} 원 인데, 
                          음료 가격은 ${drink.price} 원 이어서 구매할 수 없습니다.</p>`
      );
    }

    // 자판기가 거스름돈을 줄 수 없는 경우
    let changes = totalInsertBalance - drink.price;

    if (totalVendingBalance < changes) {
      throw new Error(`<p>음료 자판기에 잔돈이 없어서 
                          ${drink.drinkName} 음료를 구매할 수 없습니다.</p>`);
    }

    return false;

  } catch (err) {
    printBuyHistory(err.message);

    return true;

  }

}


/***
 * ============================== 공통 기능 관련 함수 ==============================
 */
function printBuyHistory(msg) {
  let printBuyHistory = document.getElementById("divBuyHistory");

  printBuyHistory.insertAdjacentHTML("beforeend", msg);

  printBuyHistory.scrollTop = printBuyHistory.scrollHeight;
}




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
      `<button onclick="insertCoin(${coin});" class="coinButton">${coin} 원 투입</button>`
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
      `<button onclick="buyDrink(${drink.drinkId});" id="btnDrink${drink.drinkId}" class="drinkButton">
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