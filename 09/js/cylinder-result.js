// 원기둥 class
class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  // 부피 계산 함수
  volume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
  
}

// 객체 생성 테스트.
//let cylinder = new Cylinder(8, 10);

// 원기둥 부피 계산 테스트.
//console.log(`부피 계산 결과 : ${cylinder.volume()}`);


// 부피 계산

// 1. html 요소 지정
const btn = document.querySelector("button");
const result = document.querySelector("#result");

btn.addEventListener(
  "click", 
  function (e) {
    // 2. 입력된 높이와 지름으로 원기둥 객체 생성
    e.preventDefault();

    const diameter = document.querySelector("#cyl-diameter").value;
    const height = document.querySelector("#cyl-height").value;

     // 3. 계산 결과 출력
     if (diameter === "" || height === "") {
        result.innerText = "지름과 높이를 입력하세요.";
     } else {
        // 원기둥 객체 생성
        let cylinder = new Cylinder(
          parseInt(diameter), parseInt(height)
        );

        // 원기둥 부피 계산
        result.innerText = 
          `원기둥의 부피 계산 결과 : ${cylinder.volume()}`;
     }
  }
);

