//diverim@naver.com   =>   div***@naver.com

// 입력된 이메일 주소의 유저명의 일부분을 감추기 하기
const email = document.querySelector("#userEmail");
const btn = document.querySelector("button");
const result = document.querySelector("#result");

// btn.addEventListener(
//   "click", function() {

//     if (email !== "") {
//       // email 주소의 유저ID 일부분을 감추기
//       // @ 를 기준으로 이메일 주소를 분리
//       username = email.value.split("@")[0];
//       username = username.substring(0, 3);
//       domain = email.value.split("@")[1];

//       // 감춘 결과 문자열
//       result.innerText = `${username}...@${domain}`;  
//     }
//   }
// );




// 이메일의 userId 의 문자길이를 고려하지 않고 userId 감추기
btn.addEventListener(
  "click", function() {

    if (email !== "") {
      // email 주소의 유저ID 일부분을 감추기
      // @ 를 기준으로 이메일 주소를 분리
      username = email.value.split("@")[0];
      
      // username 의 문자열 길이의 반을 기준으로 감추기
      usernameLen = username.length / 2;
      username = username.substring(0, (username.length - usernameLen));
      domain = email.value.split("@")[1];

      // 감춘 결과 문자열
      result.innerText = `${username}...@${domain}`;  
      email.value = "";
    }
  }
);