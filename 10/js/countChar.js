
function wordCounter(str, word) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if(str[i] === word)
      count += 1;
  }

  return count;
}

// 입력된 문자열에서 특정 문자의 갯수를 확인하는 기능을 구현
const string = prompt("문자열 입력");
const word = prompt("체크할 문자 입력");

const result = wordCounter(string, word);

document.write(`${string} - ${word} - ${result}`);