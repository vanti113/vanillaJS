const body = document.querySelector("body");

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.round(Math.random() * (8 - 1) + 1);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
