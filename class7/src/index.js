const FKEY = "finished",
  PKEY = "pending";
const form = document.querySelector(".toDoForm"),
  input = form.querySelector("input"),
  pendList = document.querySelector(".pending"),
  finList = document.querySelector(".finished");
let pendToDos = [],
  finToDos = [];

function saveToDos() {
  localStorage.setItem(PKEY, JSON.stringify(pendToDos));
}
function delToDos(event) {
  console.log(event.target.parentNode);
  const delList = event.target.parentNode;
  const delUl = delList.parentNode;
  console.log(delUl.className);
  delUl.removeChild(delList);
  const cleanToDos = pendToDos.filter(function (toDo) {
    return toDo.id !== parseInt(delList.id);
  });
  console.log(cleanToDos);
  pendToDos = cleanToDos;
  saveToDos();
}
function sendToDos(event) {
  const sendList = event.target.parentNode;
  const listParent = sendList.parentNode,
    name = listParent.className;
  if (name === FKEY) {
    event.target.innerText = "⏬";
    pendList.appendChild(sendList);
  } else {
    event.target.innerText = "⏪";
    finList.appendChild(sendList);
  }
}

function paintToDos(text) {
  const li = document.createElement("li"),
    btnDel = document.createElement("button"),
    btnTgl = document.createElement("button"),
    span = document.createElement("span"),
    newId = pendToDos.length + 1;
  span.innerText = text;
  btnDel.innerText = "❌";
  btnTgl.innerText = "⏬";
  li.appendChild(span);
  li.appendChild(btnDel);
  li.appendChild(btnTgl);
  li.id = newId;
  pendList.appendChild(li);
  const pendObj = {
    id: newId,
    text: text,
  };
  pendToDos.push(pendObj);
  saveToDos();

  btnDel.addEventListener("click", delToDos);
  btnTgl.addEventListener("click", sendToDos); //
}

function handleInput(event) {
  event.preventDefault();
  const inputValue = input.value;
  paintToDos(inputValue);
  input.value = "";
}

function loadToDos() {
  const pending = localStorage.getItem(PKEY);
  const finished = localStorage.getItem(FKEY);
  if (pending !== null) {
    const reloaded = JSON.parse(pending);
    //console.log(reloaded);
    reloaded.forEach(function (el) {
      paintToDos(el.text);
    });
  }
}
function init() {
  loadToDos();
  form.addEventListener("submit", handleInput);
}
init();
