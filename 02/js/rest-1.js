//rest-1.js

// 전개 구문
// ...numbers : 여러개의 데이터가 전달됨을 나타냄.
function addNum(...numbers) {

  let sum = 0;

  for (let number  of numbers)
    sum += number;

  return sum;
}

// 함수 호출 및 사용
addNum(1);

addNum(1,2);

addNum(1,2,3,4);




// 나머지 매개변수
// 일부분을 먼저 매개변수로 받고,  => first
// 나머지를 매개변수로 받음.        => ...favs
function displayFavorites(first, ...favs) {

  // first => a
  // favs => b, c
}

displayFavorites("a", "b", "c");