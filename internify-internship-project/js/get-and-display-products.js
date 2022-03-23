class Product {
  productName;
  productPrice;
  productImageUrl;
  productUrl;
  constructor(productName, productPrice, productImageUrl, productUrl) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productImageUrl = productImageUrl;
    this.productUrl = productUrl;
  }
}

var productArea = document.querySelector("#productArea");

const root = "/product-list.json";
var container = document.querySelector("#productArea");

var cargoImageSource = "/images/icons8-delivery-truck-60.png";

// turn json objects into javascript objects
function setProducts(products) {
  let objectArray = [];
  for (let i = 0; i <= products.length - 1; i++) {
    objectArray.push(
      new Product(
        products[i].name,
        products[i].priceText,
        products[i].image,
        products[i].url
      )
    );
  }
  return objectArray;
}

// get product objects using fetch API
async function getProducts(category) {
  console.log(category);
  let productArray = [];
  await fetch("/product-list.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to load");
      }
    })
    .then((data) => {
      let stringData = JSON.stringify(data.responses);
      let parsedData = JSON.parse(stringData);
      let products = parsedData[0][0].params.recommendedProducts[category];
      productArray = setProducts(products);
    })
    .catch((error) => {
      console.log("Error", error.message);
    });
  return productArray;
}

async function displayProducts(category) {
  let products = await getProducts(category);
  if (container.innerHTML != "") {
    container.innerHTML = "";
  }
  for (let i = 0; i <= products.length - 1; i++) {
    setProductDisplay(products[i]);
  }
}

function createElement(tag, className) {
  var item = document.createElement(tag);
  item.classList.add(className);
  return item;
}

function setProductDisplay(item) {
  var productWrapper = createElement("div", "product");

  var productImage = createElement("div", "productImage");

  var image = document.createElement("img");
  image.src = item.productImageUrl;

  productImage.appendChild(image);
  productWrapper.appendChild(productImage);

  var productName = createElement("div", "productName");
  productName.textContent = item.productName;

  productWrapper.appendChild(productName);

  productPrice = createElement("div", "productPrice");
  productPrice.textContent = item.productPrice;

  productWrapper.appendChild(productPrice);

  var cargoFee = createElement("div", "cargoFee");
  var cargoImage = document.createElement("img");
  cargoImage.src = cargoImageSource;
  cargoFee.appendChild(cargoImage);

  var dot = createElement("span", "dot");
  var fee = document.createElement("span");
  fee.textContent = "Ücretsiz Kargo";
  cargoFee.appendChild(dot);
  cargoFee.appendChild(fee);

  productWrapper.appendChild(cargoFee);

  var addToCart = createElement("div", "addToCart");
  addToCart.textContent = "Sepete Ekle";
  productWrapper.appendChild(addToCart);
  container.appendChild(productWrapper);
}

var nav_spans = document.querySelectorAll("#navigation-grid-list li a span");
displayProducts("Size Özel");

nav_spans[0].addEventListener("click", () => {
  displayProducts("Size Özel");
  productArea.scrollTo(0, 0);
});
nav_spans[1].addEventListener("click", () => {
  displayProducts("Yapı Market & Tamirat > Tamir, Tadilat Gereçleri");
  productArea.scrollTo(0, 0);
});
nav_spans[2].addEventListener("click", () => {
  displayProducts("Ev, Dekorasyon, Bahçe > Mobilya");
  productArea.scrollTo(0, 0);
});
nav_spans[3].addEventListener("click", () => {
  displayProducts("Kozmetik & Kişisel Bakım > Sağlık, Medikal");
  productArea.scrollTo(0, 0);
});
nav_spans[4].addEventListener("click", () => {
  displayProducts("Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)");
  productArea.scrollTo(0, 0);
});
nav_spans[5].addEventListener("click", () => {
  displayProducts("Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi");
  productArea.scrollTo(0, 0);
});
