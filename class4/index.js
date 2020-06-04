const body = document.querySelector("body");

const superHandler = {
  changeColor: function () {
    let veiw = window.innerWidth;
    if (veiw > 1000) {
      body.style.backgroundColor = "red";
    } else if (veiw < 800 && veiw > 600) {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "yellow";
    }
  },
};

function init() {
  window.addEventListener("resize", superHandler.changeColor);
}
init();
