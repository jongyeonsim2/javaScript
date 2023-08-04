
// 버튼, 로또 번호 출력 지정
const btn = document.querySelector("button");
const result = document.querySelector("#result");

// 로또번호 관리 객체
const lottoNumber = {
  numCnt : 6,
  maxLottoNum : 45
};

// 객체를 디스트럭팅해서 로또번호 생성에 사용
btn.addEventListener(
  "click", () => {
    //1. lottoNumber 디스트럭팅
    let { numCnt, maxLottoNum } = lottoNumber;

    //2. 로또 번호 중복을 방지하기 위햇 Set() 객체 생성
    let myLottoNum = new Set();

    //3. 로또 번호 생성 후 Set 에 저장
    for (let i = 0; i < numCnt; i++) {
      myLottoNum.add(
        Math.floor
          (Math.random() * maxLottoNum) + 1
      );
    }

    //4. 선택된 로또번호 출력
    result.innerText = `${[...myLottoNum]}`;
  }
);