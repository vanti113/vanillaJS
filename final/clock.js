const clockPart = document.querySelector(".clockPart"),
  timer = clockPart.querySelector(".clockPart_time");

function timeFunc() {
  const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
  const currentTime = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
  timer.innerText = currentTime;
}

function init() {
  setInterval(timeFunc, 100);
}
init();
