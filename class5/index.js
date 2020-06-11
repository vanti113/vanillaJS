const time = document.querySelector("h3");

const xMas = new Date(2020, 11, 24, 0, 0, 0),
  xMili = xMas.getTime(),
  xSec = parseInt(xMili / 1000);
const today = new Date(),
  myMili = today.getTime(),
  mySec = parseInt(myMili / 1000);
let leftTime = xSec - mySec;

function timeHandler(leftTime) {
  const day = Math.round(leftTime / 86400);
  const hour = Math.round((leftTime % 86400) / 3600);
  const min = Math.round(((leftTime % 86400) % 3600) / 60);
  const sec = Math.round(((leftTime % 86400) % 3600) % 60);

  time.innerText = `${day < 10 ? `0${day}d` : `${day}d`} ${
    hour < 10 ? `0${hour}h` : `${hour}h`
  } ${min < 10 ? `0${min}m` : `${min}m`} ${sec < 10 ? `0${sec}s` : `${sec}s`}`;
}

function processTime() {
  leftTime--;
  timeHandler(leftTime);
}

function init() {
  window.setInterval(processTime, 1000);
}
init();
