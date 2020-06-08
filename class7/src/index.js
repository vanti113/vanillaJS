const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingUl = document.querySelector(".pending"),
  finishedUl = document.querySelector(".finished"),
  emojiX = "❌",
  emojiGo = "⏩",
  emojiBack = "⏪";

const toDos = [];
const KEY = "text";
function saveToDos() {
  const jsnData = JSON.stringify(toDos);
  localStorage.setItem(KEY, jsnData);
}
function paintToDo(text) {
  const li = document.createElement("li"),
    btnDel = document.createElement("button"),
    btnTgl = document.createElement("button"),
    span = document.createElement("span"),
    newId = toDos.length + 1;

  span.innerText = text;
  btnDel.innerText = emojiX;
  btnTgl.innerHTML = emojiGo;
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  li.id = newId;
  li.appendChild(span);
  li.appendChild(btnDel);
  li.appendChild(btnTgl);
  pendingUl.appendChild(li);
  saveToDos();
}

function handleInput(e) {
  e.preventDefault();
  const inputValue = toDoInput.value;
  paintToDo(inputValue);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleInput);
}
init();
