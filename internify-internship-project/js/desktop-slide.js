var previous = document.querySelector("#previous");
var next = document.querySelector("#next");
var productArea = document.querySelector("#productArea");
var nextArrow = document.querySelector("#next img");
var previousArrow = document.querySelector("#previous img");

function scrollNext() {
  var product = document.querySelector(".product");
  let width = product.offsetWidth;
  width *= 4.25;
  productArea.scrollBy(width, 0);
}

function scrollPrevious() {
  var product = document.querySelector(".product");
  let width = product.offsetWidth;
  width *= 4.25;
  width -= 2 * width;
  productArea.scrollBy(width, 0);
}

previous.addEventListener("click", () => {
  scrollPrevious();
});

next.addEventListener("click", () => {
  scrollNext();
});

productArea.addEventListener("scroll", () => {
  if (
    productArea.offsetWidth + productArea.scrollLeft >=
    productArea.scrollWidth
  ) {
    nextArrow.setAttribute("style", "opacity:0.1");
  } else if (productArea.scrollLeft == 0) {
    previousArrow.setAttribute("style", "opacity:0.1");
  } else {
    nextArrow.setAttribute("style", "opacity:1");
    previousArrow.setAttribute("style", "opacity:1");
  }
});
