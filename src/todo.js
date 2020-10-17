const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo){
    return toDo.id === 1
}

let toDos = []; // 할일목록

function deleteToDos(event) {
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}
// filter : array의 모든 아이템을 통해 함수를 실행하고, true인 아이템들로 새로운 array 만듬

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDos);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj);
    saveToDos()
}
// local storage에는 js의 data를 저장할 수 없음. 오직 string만 저장 가능
// js object가 string이 되도록 만들어야함 => JSON.stringify(toDos) 사용

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) { // 저장된 toDos 불러오기
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // parsedToDos.forEach(function(toDo){
        //     console.log(toDo.text);
        // })
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
//forEach() : array를 위한 함수. array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜줌

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();