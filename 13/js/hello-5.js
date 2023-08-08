
async function doYouLikeJavascript2() {
  let fav = "Javascript2";
  return fav;
}

async function displayFavoraiteLanguage2(language) {
  return `[async] My favorite language is ${language}.`;
}

// doYouLikeJavascript2()  // promise 가 반환되어야 함.
//   .then(displayFavoraiteLanguage2)               // promise 가 반환되어야 함.
//   .then(console.log);


async function mainApp() {
  const fav = await doYouLikeJavascript2(); // => 실행 순서 제어 => 비동기프로그래밍
  const result = await displayFavoraiteLanguage2(fav); // => 실행 순서 제어 => 비동기프로그래밍
  console.log(result);
}

mainApp();