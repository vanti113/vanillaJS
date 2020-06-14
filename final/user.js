const nameForm = document.querySelector(".nameForm"),
  nameInput = nameForm.querySelector(".nameInput"),
  userName = document.querySelector(".name"), // h1
  query = document.querySelector(".query");
const toDoPart = document.querySelector(".toDoPart"),
  welcomeDiv = document.querySelector(".welcomePart_name"),
  nameBtn = document.querySelector(".nameBtn");

function saveUserNm(name) {
  localStorage.setItem("user", name);
}
function clearFunc() {
  localStorage.removeItem("user");
  location.reload();
}

const messageList = [
  {
    text: "Good day, ",
    id: 1,
  },
  {
    text: "Let's fill out your To-Do, ",
    id: 2,
  },
  { text: "How was today? ", id: 3 },
  { text: "Welcome, ", id: 4 },
];

function paintUserNm(name) {
  const ranNm = Math.round(Math.random() * (3 - 0) + 0); // 여기에 랜덤 메세지 표시 관련 로직이 필요하다.
  const welcome = `${messageList[ranNm].text}${name}`;
  userName.innerText = welcome;
  toDoPart.style.display = "block"; //차후 프론트엔드 작업시 플렉스로 바꿔질 예정이 있음.
  nameBtn.style.display = "inline";
  nameBtn.addEventListener("click", clearFunc);
}
function replaceFunc() {
  nameInput.style.display = "none";
  query.style.display = "none";
}
function handler(e) {
  e.preventDefault();
  const userName = nameInput.value;
  // userName.innerText = userName;
  console.log(nameInput.value);
  // nameInput.value = "";
  paintUserNm(userName);
  saveUserNm(userName);
  replaceFunc();
}

function loadUserNm() {
  const currentUser = localStorage.getItem("user");
  if (currentUser !== null) {
    console.log(currentUser);
    paintUserNm(currentUser);
    replaceFunc();
  } else {
    //새로운 유저에 대한 이름 등록과 웰컴 페이지만
    query.innerText = "What's your name?";
    toDoPart.style.display = "none";
    nameBtn.style.display = "none";
  }
}

function init() {
  nameForm.addEventListener("submit", handler);
  loadUserNm();
}
init();
