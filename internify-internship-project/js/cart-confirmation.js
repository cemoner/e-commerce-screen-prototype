var verificationBox = document.querySelector("#verification");
var productQuantity = document.querySelectorAll("#productArea .products");
var closeButton = document.querySelector("#close");

function openBox() {
  verificationBox.setAttribute("style", "pointer-events:all");
  verificationBox.setAttribute("style", "opacity:0.9");
  setTimeout(closeBox, 5000);
}

function closeBox() {
  verificationBox.setAttribute("style", "opacity:0");
  verificationBox.setAttribute("style", "pointer-events:none");
}

document.addEventListener("click", (item) => {
  if (item.target && item.target.classList.contains("addToCart")) {
    openBox();
  }
});

closeButton.addEventListener("click", () => {
  closeBox();
});
