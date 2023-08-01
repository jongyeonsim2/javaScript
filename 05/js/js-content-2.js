/**
 * js-content-2.html 에서 사용하는 js file 임.
 */

// 요소 선택( title, 회원명, 회원사진 )
const title = document.querySelector("#title");
const userNmae = document.querySelector("#desc p");//첫 번째
const pfImg = document.querySelector("#profile img");

// 해당 요소의 click 이 발생했을 때의 처리
title.onclick = () => title.innerText = "프로필";
//title.onclick = () => { title.innerText = "프로필";};

userNmae.onclick = () => userNmae.innerHTML = "이름 : <b>홍길동</b>";
pfImg.onclick = () => pfImg.src = "images/pf2.png";