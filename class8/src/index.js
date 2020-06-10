const casinoForm = document.querySelector(".form"),
  casinoInput = casinoForm.querySelector(".casino"),
  btn = document.querySelector(".playBtn");
let stdValue = 0,
  count = 0;
let result = {
  answer: "",
  message: "",
  system: "",
};

function setNumber() {
  const maxNum = document.querySelector(".number");
  maxNum.innerText = casinoInput.value;
  stdValue = parseInt(casinoInput.value);
}

function handleEvent(e) {
  e.preventDefault();
}
function winOrLose(userNum, machineNum) {
  result.message = `You chose : ${userNum} | The machine chose : ${machineNum}`;
  if (userNum === machineNum) {
    result.answer = "You won. would you like to play again?";
    btn.disabled = true;
  } else {
    result.answer = "You lose";
    count++;
    if (count === 10) {
      alert("You lost all money dude! go home and eat kimchi!");
      btn.disabled = true;
    }
  }
}

function playGame() {
  const submitted = document.querySelector(".guessNum"),
    submittedNum = parseInt(submitted.value);
  const randomNum = Math.round(Math.random() * (stdValue - 0));
  const guessMessage = document.querySelector(".guessMesssage"),
    guessSpan = guessMessage.querySelector("span");
  const resultMessage = document.querySelector(".resultMessage"),
    resultSpan = resultMessage.querySelector("span");

  if (stdValue === 0) {
    guessSpan.innerText = "you must select number before click the button!";
  } else if (submittedNum > stdValue) {
    guessSpan.innerText = "your number is too high!";
  } else if (isNaN(submittedNum)) {
    guessSpan.innerText =
      "submit your Number! you would'nt like play this game, right?";
  } else {
    winOrLose(submittedNum, randomNum);
    guessSpan.innerText = result.message;
    resultSpan.innerText = result.answer;
  }
}

function init() {
  casinoForm.addEventListener("submit", handleEvent);
  casinoInput.addEventListener("input", setNumber);
  btn.addEventListener("click", playGame);
}
init();
