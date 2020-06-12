const numBtn = document.querySelectorAll(".number"),
  clBtn = document.querySelector(".clear"),
  operBtn = document.querySelectorAll(".oper"),
  eqBtn = document.querySelector(".equal");
const input = document.querySelector("input");

const saveNum = {
  first: "",
  second: "",
  oper: "",
};

function clear() {
  saveNum.first = "";
  saveNum.second = "";
  saveNum.oper = "";
  input.value = "";
}

function prepareNxt(result) {
  saveNum.first = result;
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

  return result.toString(); // 나갈때는 문자열로 변환해야 함.
}
function operFunc(e) {
  const tempData = e.target.innerText;

  if (saveNum.first !== "") {
    // 첫번째 수가 존재한다면
    saveNum.oper = tempData;

    if (saveNum.second !== "") {
      // 두번째 수가 존재한다면
      //첫째 수와 둘째 수를 연산하는 함수를 호출하고 그 리턴 값을 표시하라.
      const result = processCal();
      input.value = result;
      // saveNum.oper = tempData;
      prepareNxt(result);
    } else {
      // 두번째 수가 존재하지 않으면
      // saveNum.oper = tempData;
    }
  }
  /* input.value = saveNum.second; 
    왜 이런 코드가 들어갔을까? 이 코드의 역할은 연산자가 입력시 이 함수가 실행되면 가장 마지막에
    인풋의 밸류값에 객체에 저장되어 있는 두번째 수 값을 넣어주는 것이다.
    하지만 계산기의 절차상으로 봤을때 연산자가 반드시 입력 되고 난 뒤 수를 눌러야 두번째 수가
    저장이 된다. 또한 계산이 끝난 뒤 자동적으로 두번째 수는 비워지므로, 두가지 상황에서 이 코드는 
    인풋 밸류를 전부 0으로 만들어 버린다. 코드 리뷰를 잘 하지 못하면 버그를 잡지 못하고,
    자기가 무슨 코드를 적는지 이해를 하지 못하면 이런 버그가 생겨버리는 것이다.......*/
}

function equalFunc() {
  if (saveNum.first !== "" && saveNum.second !== "" && saveNum.oper !== "") {
    const result = processCal();
    input.value = result;
    saveNum.oper = "";
    prepareNxt(result);
  }
}

function numFunc(e) {
  const tempData = e.target.innerText;

  // 조건문을 이용한다. 첫번째 페이즈에서 유저는 첫 수를 입력하고, 그 수는 객체에 저장되어 인풋의 밸류에 나타나게 됨
  if (saveNum.oper === "") {
    saveNum.first += tempData;
    input.value = saveNum.first;
  } else {
    saveNum.second += tempData;
    input.value = saveNum.second;
  }

  console.log(
    `fisrt : ${saveNum.first} | second : ${saveNum.second} | oper : ${saveNum.oper} | input : ${input.value}`
  );
}

function init() {
  for (let i = 0; i < numBtn.length; i++) {
    //숫자키에 대한 이벤트 핸들러 등록
    numBtn[i].addEventListener("click", numFunc);
  }
  for (let i = 0; i < operBtn.length; i++) {
    //연산자 키에 대한 이벤트 핸들러 등록
    operBtn[i].addEventListener("click", operFunc);
  }
  clBtn.addEventListener("click", clear);
  eqBtn.addEventListener("click", equalFunc);
}
init();
