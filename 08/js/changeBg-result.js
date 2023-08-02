window.onload = function () {
  const bgCount = 5;

  // 난수 1 ~ 5 생성. => 파일명의 일부분으로 사용.
  let randomNum = Math.floor(Math.random() * bgCount) + 1;

  document.body.style.backgroundImage = 
    `url(images/bg-${randomNum}.jpg)`;
};