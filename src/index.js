const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if(hasClass){
  // 	title.classList.remove(CLICKED_CLASS);
  // } else {
  // 	title.classList.add(CLICKED_CLASS); // 한번 클릭하면 돌아가지않음
  // }

  // toggle : 위에 내용을 한번에 요약. class가 있는지 체크해서, 있으면 add, 아니면 remove해줌
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick); // 마우스 클릭시
  // MDN 에서 이벤트 참고하기!!
}

init();

// classList에서는 메소드를 가지게됨
