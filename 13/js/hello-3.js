/**
 * 일반 함수와 async 예약어로 선언한 함수를 코드 레벨에서 비교
 */

// 일반함수
function doYouLikeJavascript() {
  let fav = "Javascript";

  return new Promise(
    (resolve, reject) => resolve(fav)
  );
}

function displayFavoraiteLanguage(language) {
  return new Promise(
    (resolve, reject) => resolve(`My favorite language is ${language}.`)
  );
}

doYouLikeJavascript()  // promise 가 반환되어야 함.
  .then(displayFavoraiteLanguage)               // promise 가 반환되어야 함.
  .then(console.log);




// async 예약어로 선언한 함수
async function doYouLikeJavascript2() {
  let fav = "Javascript2";
  return fav;
}

async function displayFavoraiteLanguage2(language) {
  return `[async] My favorite language is ${language}.`;
}

doYouLikeJavascript2()  // promise 가 반환되어야 함.
  .then(displayFavoraiteLanguage2)               // promise 가 반환되어야 함.
  .then(console.log);