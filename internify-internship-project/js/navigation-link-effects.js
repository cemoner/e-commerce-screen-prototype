var nav_anchors = document.querySelectorAll("#navigation-grid-list li a");
var nav_spans = document.querySelectorAll("#navigation-grid-list li a span");
var nav_lis = document.querySelectorAll("#navigation-grid-list li");
var myWindow = window.matchMedia("(min-width:769px)");

let tracker = -1;

function effectsCombined(index_number) {
  tracker = index_number;
  if (myWindow.matches) {
    desktopEffect(index_number);
  } else {
    mobileEffect(index_number);
  }
}

function desktopEffect(index_number) {
  console.log("desktop-effect");
  desktopReset();
  nav_lis[index_number].setAttribute("style", "border-color:rgb(0, 102, 255)");
  nav_anchors[index_number].setAttribute(
    "style",
    "background-color:rgba(0, 200, 255, 0.05)"
  );
  nav_spans[index_number].setAttribute("style", "color:rgba(0, 130, 255, 1)");
}

function mobileEffect(index_number) {
  mobileReset();
  nav_lis[index_number].setAttribute(
    "style",
    "border-bottom:solid 1vw rgb(0, 102, 255)"
  );
}

function desktopReset() {
  for (let i = 0; i <= nav_lis.length - 1; i++) {
    nav_lis[i].setAttribute("style", "border-color:transparent");
    nav_anchors[i].setAttribute("style", "background-color:transparent");
    nav_spans[i].setAttribute("style", "color:rgba(61, 60, 60, 0.65)");
  }
}

function mobileReset() {
  for (let i = 0; i <= nav_lis.length - 1; i++) {
    nav_lis[i].setAttribute(
      "style",
      "border-bottom:solid rgba(61, 60, 60, 0.2) 0.55vw"
    );
  }
}

for (let i = 0; i <= nav_anchors.length - 1; i++) {
  nav_spans[i].addEventListener("click", function () {
    effectsCombined(i);
  });
}

effectsCombined(0);

window.addEventListener("resize", function () {
  if (!myWindow.matches) {
    desktopReset();
  } else {
    mobileReset();
  }
  effectsCombined(tracker);
});
