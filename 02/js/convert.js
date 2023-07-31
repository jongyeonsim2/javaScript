/**
 * convert.js
 */

let fVar = parseFloat(prompt("변환할 화씨 온도"));
let result;

/**
 * toFixed() : 계산 결과의 소수점 자리수를 지정.
 * 현재는 소수점 한 자리까지만 출력되도록 함.
 */
result = ((fVar - 32) / 1.8).toFixed(1);
alert(`화씨 ${fVar}도는 섭씨 ${result} 도 입니다.`);