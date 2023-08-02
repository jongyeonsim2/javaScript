
// 책 목록에 추가될 정보 : 제목, 저자
const title = document.querySelector("#title");
const author = document.querySelector("#author");

// 저장버튼 지정
const saveBtn = document.querySelector("#save");

// 책 목록이 표시될 영역 지정
const bookList = document.querySelector("#bookList");


// 저장 버튼 이벤트 구현
saveBtn.addEventListener(
  "click" , (e) => {
    //새로 고침 방지.
    e.preventDefault();

    // 1. li tag 요소 추가
    const item = document.createElement("li");

    item.innerHTML = `
      ${title.value} - ${author.value}
      <span class="delBtn">삭제</span>
    `;

    // 2. 부모 요소(bookList)에 추가
    bookList.appendChild(item);

    title.value = "";
    author.value = "";

    // 3. li 요소의 삭제 기능 구현
    // 여러 권의 도서 정보가 추가 되는 경우를 고려해서
    // 모든 삭제 버튼을 가져옴

    const delBtns = document.querySelectorAll(".delBtn");

    for ( let delBtn of delBtns ) {
      delBtn.addEventListener(
        "click",
        function () {
          // 현재 이벤트는 span tag 에서 발생
          // 도서명, 저자 정보를 삭제 해야함. => li
          // li 를 삭제하기 위해서는 li의 부모인 ul 를 지정.
          this.parentNode.parentNode.removeChild(this.parentNode);
          /**
           * this.parentNode.parentNode.removeChild(this.parentNode);
           * 
           * 1. this => span tag
           * 2. this.parentNode => li tag
           * 3. this.parentNode.parentNode => ul tag
           * 4. removeChild(this.parentNode) 
           *    this.parentNode => li tag
           */
        }
      );
    }

  }

);
