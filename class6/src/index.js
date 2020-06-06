const select = document.querySelector("select");
const local = window.localStorage;

function reloadFunc() {
  const localData = local.getItem("Country");
  if (localData === null) {
    select.value = "Default";
  } else {
    select.value = localData;
  }
}

function addToLocal(code) {
  local.setItem("Country", code);
}
function saveData(e) {
  const code = e.target.value;
  addToLocal(code);
}

function init() {
  select.addEventListener("input", saveData);
  window.addEventListener("load", reloadFunc);
}

init();
