const numBtn = document.querySelectorAll(".number"),
  clBtn = document.querySelector(".clear"),
  operBtn = document.querySelectorAll(".oper"),
  eqBtn = document.querySelector(".equal");
const input = document.querySelector("input");

const saveNum = {
  first: "",
  second: "",
  oper: "",
  result: "",
};

function clear() {
  saveNum.first = "";
  saveNum.second = "";
  saveNum.oper = "";
  input.value = "";
}

function prepareNxt() {
  saveNum.first = saveNum.result;
  saveNum.second = "";
}

function processCal() {
  //계산 되기 전에 데이터를 정수로 변환
  const first = parseInt(saveNum.first);
  const second = parseInt(saveNum.second);
  const oper = saveNum.oper;
  let result = 0;
  switch (oper) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "/":
      result = first / second;
      break;
  }

  saveNum.result = result.toString(); // 나갈때는 문자열로 변환해야 함.
}

function equalFunc() {}
function operFunc(e) {
  const tempData = e.target.innerText;

  if (saveNum.first !== "") {
    // 첫번째 수가 존재한다면
    saveNum.oper = tempData;

    if (saveNum.second !== "" && saveNum.oper !== "") {
      // 두번째 수가 존재한다면
      //첫째 수와 둘째 수를 연산하는 함수를 호출하고 그 리턴 값을 표시하라.
      processCal();
      input.value = saveNum.result;
      saveNum.oper = tempData;
      prepareNxt();
    } else {
      // 두번째 수가 존재하지 않으면
      saveNum.oper = tempData;
    }
  }
}

function check(e) {
  // 버튼이 눌리면 버튼의 이너텍스트 값을 임시 변수에 등록한다.
  const tempData = e.target.innerText;
  const className = e.target.className; // 버튼의 클래스네임을 구분자로 사용

  // 조건문을 이용한다. 첫번째 페이즈에서 유저는 첫 수를 입력하고, 그 수는 객체에 저장되어 인풋의 밸류에 나타나게 됨
  if (className === "number") {
    if (saveNum.oper === "") {
      saveNum.first += tempData;
      input.value = saveNum.first;
    } else {
      saveNum.second += tempData;
      input.value = saveNum.second;
    }
  }

  if (className === "equal") {
    if (saveNum.first !== "" && saveNum.second !== "" && saveNum.oper !== "") {
      processCal();
      input.value = saveNum.result;
      saveNum.oper = "";
      prepareNxt();
    }
  }

  if (className === "clear") {
    clear();
  }
  console.log(
    `${saveNum.first} | ${saveNum.second} | ${saveNum.oper} | ${input.value}`
  );
}

function init() {
  for (let i = 0; i < numBtn.length; i++) {
    //숫자키에 대한 이벤트 핸들러 등록
    numBtn[i].addEventListener("click", check);
  }
  for (let i = 0; i < operBtn.length; i++) {
    //연산자 키에 대한 이벤트 핸들러 등록
    operBtn[i].addEventListener("click", operFunc);
  }
  clBtn.addEventListener("click", check);
  eqBtn.addEventListener("click", check);
}
init();
