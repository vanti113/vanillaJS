const fontH2 = document.querySelector("h2"),
  fontColor = fontH2.style.color;

const superEventHandler = {
  mouseOver: function () {
    fontH2.style.color = colors[0];
    fontH2.innerText = "The mouse is here!";
  },
  mouseOut: function () {
    fontH2.style.color = colors[1];
    fontH2.innerText = "The mouse is gone!";
  },
  changeSize: function () {
    fontH2.style.color = colors[2];
    fontH2.innerText = "You just resized!";
  },
  rightClick: function () {
    fontH2.style.color = colors[3];
    fontH2.innerText = "That was a right!";
  },
};
// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
/* function mouseFunc() {
  superEventHandler.mouseOver();
}
function mouseFunc2() {
  superEventHandler.mouseOut();
} */
function init() {
  fontH2.addEventListener("mouseover", superEventHandler.mouseOver);
  fontH2.addEventListener("mouseout", superEventHandler.mouseOut);
  window.addEventListener("resize", superEventHandler.changeSize);
  window.addEventListener("contextmenu", superEventHandler.rightClick);
}

init();
