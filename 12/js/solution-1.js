
// 통신 URL ( JSON Data 요청 )
const url = "http://reqres.in/api/products/10";

// HTML 요소 지정
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);

    // JSON 으로 데이터 통신을 하는 경우,
    // 수신된 데이터로 먼저 console 에 출력해서,
    // 정상적으로 수신이 되었는지를 먼저 확인함.
    console.log(product);

    // 정상적으로 수신이 확인이 되었기 때문에,
    // 화면 처리를 하면됨.
    result.innerHTML = 
    `
      <p>상품명 : ${product.data.name}</p>
      <p>생산년도 : ${product.data.year}</p>
    `;
  }
};