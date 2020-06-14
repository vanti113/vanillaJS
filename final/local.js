const input = document.querySelector(".toDoInput"),
  form = document.querySelector(".toDoForm"),
  ToDoUl = document.querySelector(".ToDo"),
  Done = document.querySelector(".Done");

const toDoKey = "todo",
  doneKey = "done";

let toDos = [];
let done = [];
let i = 0;
function saveToDos() {
  const toDoList = JSON.stringify(toDos),
    doneList = JSON.stringify(done);

  localStorage.setItem("To-do", toDoList);
  localStorage.setItem("Done", doneList);
}

function delToDos(ev) {
  const targetNode = ev.target.parentNode;
  console.log(targetNode);
  /* const id = targetNode.id;
  const removeList = document.getElementById("id");
  // console.log(targetNode.parentNode.className); */
  const classNm = targetNode.parentNode.className;
  if (classNm === "ToDo") {
    ToDoUl.removeChild(targetNode);
    const fixedToDos = toDos.filter(
      (toDo) => toDo.id !== parseInt(targetNode.id)
    );
    toDos = fixedToDos;
    saveToDos();
  } else {
    Done.removeChild(targetNode);
    const fixedToDos = done.filter(
      (toDo) => toDo.id !== parseInt(targetNode.id)
    );
    done = fixedToDos;
    saveToDos();
  }
}

function passToDos(ev) {
  const targetNode = ev.target.parentNode,
    classNm = targetNode.parentNode.className;
  console.dir(targetNode);

  if (classNm === "ToDo") {
    Done.appendChild(targetNode);
    const fixedToDos = toDos.filter(
      (toDo) => toDo.id !== parseInt(targetNode.id)
    );
    targetNode.id = done.length + 1;
    const newObj = {
      text: targetNode.firstChild.innerText,
      // id: parseInt(targetNode.id),
      id: done.length + 1,
    };
    toDos = fixedToDos;
    done.push(newObj);
    saveToDos();

    // console.log(targetNode.parentNode.className);
  } else {
    ToDoUl.appendChild(targetNode);
    const fixedDone = done.filter(
      (toDo) => toDo.id !== parseInt(targetNode.id)
    );
    targetNode.id = toDos.length + 1;
    const newObj = {
      text: targetNode.firstChild.innerText,
      id: toDos.length + 1,
    };
    done = fixedDone;
    toDos.push(newObj);
    saveToDos();
    // console.log(targetNode.parentNode.className);
  }
}
function increseId() {
  return i++;
}

function paintDone(text) {
  const list = document.createElement("li"),
    span = document.createElement("span"),
    delBtn = document.createElement("button"),
    passBtn = document.createElement("button"),
    id = done.length + 1;
  // id = increseId();

  const doneObj = {
    text: text,
    id: id,
  };
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delToDos);
  passBtn.innerText = "⏪";
  passBtn.addEventListener("click", passToDos);
  //리스트가 생성되면서 아이디가 붙는 구문.
  list.id = id;
  //
  list.appendChild(span);
  list.appendChild(delBtn);
  list.appendChild(passBtn);
  Done.appendChild(list);
  done.push(doneObj);
  saveToDos();
  // console.log(toDos);
}

function paintToDo(text) {
  //여기서 아이디를 생성?
  // console.log(text);
  const list = document.createElement("li"),
    span = document.createElement("span"),
    delBtn = document.createElement("button"),
    passBtn = document.createElement("button"),
    id = toDos.length + 1;
  // id = increseId();

  const toDoObj = {
    text: text,
    id: id,
  };
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delToDos);
  passBtn.innerText = "⏩";
  passBtn.addEventListener("click", passToDos);
  //리스트가 생성되면서 아이디가 붙는 구문.
  list.id = id;
  //
  list.appendChild(span);
  list.appendChild(delBtn);
  list.appendChild(passBtn);
  ToDoUl.appendChild(list);
  toDos.push(toDoObj);
  saveToDos();
  // console.log(toDos);
}

function handler(e) {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  paintToDo(text);
}

function loadToDos() {
  const loadedToDO = localStorage.getItem("To-do");
  const loadedDone = localStorage.getItem("Done");
  if (loadedToDO !== null) {
    const parsed = JSON.parse(loadedToDO);
    parsed.forEach((txt) => {
      paintToDo(txt.text);
    });
  }
  if (loadedDone !== null) {
    const parsed = JSON.parse(loadedDone);
    parsed.forEach((txt) => {
      paintDone(txt.text);
    });
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handler);
}
init();
