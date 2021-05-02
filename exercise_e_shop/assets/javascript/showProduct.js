var listItems = [
  {
    "id": 1,
    "name": "T-Shirt Summer Vibes",
    "price": 119.99,
    "discount": 30,
    "avatar": "assets/images/item1.png",
  },
  {
    "id": 2,
    "name": "Loose Knit 3/4 Sleeve",
    "price": 119.99,
    "discount": 30,
    "avatar": "assets/images/item2.png",
  },
  {
    "id": 3,
    "name": "Basic Slim Fit T-Shirt",
    "price": 79.99,
    "discount": 30,
    "avatar": "assets/images/item3.png",
  },
  {
    "id": 4,
    "name": "Loose Textured T-Shirt",
    "price": 119.99,
    "discount": 0,
    "avatar": "assets/images/item4.png",
  },
]

var listProduct = document.getElementById("list");

if (listProduct) {
  listItems.forEach((item, index) => {
    var i = index + 1;
    const li = document.createElement("li");
    const classLi = document.createAttribute("class");
    classLi.value = "col-3 col-sm-6 list-item product-item";
    li.setAttributeNode(classLi);

    const product = document.createElement("div");
    const classProduct = document.createAttribute("class");
    classProduct.value = "product";
    product.setAttributeNode(classProduct);

    const linkImg = document.createElement("a");
    const hrefImg = document.createAttribute("href");
    hrefImg.value = "#";
    linkImg.setAttributeNode(hrefImg);
    linkImg.classList.add("img-product");

    const imgProduct = document.createElement("img");
    const srcImg = document.createAttribute("src");
    srcImg.value = item.avatar;
    const classImg = document.createAttribute("class");
    classImg.value = "img";
    const altImg = document.createAttribute("alt");
    altImg.value = "item" + i;
    imgProduct.setAttributeNode(srcImg);
    imgProduct.setAttributeNode(classImg);
    imgProduct.setAttributeNode(altImg);

    const nameProduct = document.createElement("h4");
    const className = document.createAttribute("class");
    className.value = "product-name";
    nameProduct.setAttributeNode(className);
    nameProduct.innerHTML = item["name"];
    
    const cartProduct = document.createElement("div");
    const discountProduct = document.createElement("span");
    const priceProduct = document.createElement("span");
    const badgeProduct = document.createElement("span");
    if (item["discount"] > 0) {
      const classCart = document.createAttribute("class");
      classCart.value = "cart-product-discount";
      cartProduct.setAttributeNode(classCart);
      
      var discountPrice = (item.price - item.price * 70 / 100).toFixed(2);
      const classDiscount = document.createAttribute("class");
      classDiscount.value = "discount-price";
      discountProduct.setAttributeNode(classDiscount);
      discountProduct.innerHTML = "$" + discountPrice;
  
      const classPrice = document.createAttribute("class");
      classPrice.value = "product-price";
      priceProduct.setAttributeNode(classPrice);
      priceProduct.innerHTML = "$" + item["price"];
  
      cartProduct.appendChild(discountProduct);
      cartProduct.appendChild(priceProduct);

      const classBadge = document.createAttribute("class");
      classBadge.value = "badge";
      badgeProduct.setAttributeNode(classBadge);
      badgeProduct.innerHTML = item["discount"] + "%";
    }
    else {
      const classPrice = document.createAttribute("class");
      classPrice.value = "product-price";
      priceProduct.setAttributeNode(classPrice);
      priceProduct.innerHTML = item["price"];
    }

    const btnAdd = document.createElement("button");
    const idBtn = document.createAttribute("id");
    idBtn.value = "addItem" + i;
    btnAdd.classList.add("btn");
    btnAdd.classList.add("btn-orange");
    btnAdd.setAttributeNode(idBtn);
    btnAdd.innerHTML = "Add to cart";
    
    linkImg.appendChild(imgProduct);

    product.appendChild(linkImg);
    product.appendChild(nameProduct);
    if (item["discount"]) {
      product.appendChild(cartProduct);
    }
    else {
      product.appendChild(priceProduct);
    }
    if (item["discount"]) {
      product.appendChild(badgeProduct);
    }
    product.appendChild(btnAdd);
    li.appendChild(product);
    listProduct.appendChild(li);
  });
}
var countCart = document.getElementsByClassName("count-cart");
function setCountCart() {
  
}
var cart = localStorage.getItem('cart')
if (cart && cart.length > 0) {
  countCart[0].innerHTML = JSON.parse(cart).length;
  countCart[0].style.display = "flex";
}
function addToCart() {
  var cart = localStorage.getItem('cart')
  for (var i = 0; i < listItems.length; i++) {
    var j = i + 1;
    if (this.id === "addItem" + j) {
      var listCarts;
      if (cart) {
        listCarts = JSON.parse(cart);
        var count = 0;
        for (var j = 0; j < listCarts.length; j++) { 
          if (listCarts[j].id === listItems[i].id) {
            listCarts[j].number++;
            count++;
          }
        }
        if (count === 0) {
          listCarts.push(listItems[i]);
          listCarts[listCarts.length-1].number = 1;
        }
      }
      else {
        listCarts = [];
        listCarts.push(listItems[i]);
        listCarts[listCarts.length-1].number = 1;
      }
      localStorage.setItem('cart', JSON.stringify(listCarts));
    }
  }
  countCart[0].innerHTML = JSON.parse(localStorage.getItem('cart')).length;
  countCart[0].style.display = "flex";
}
for (var i = 0; i < listItems.length; i++) {
  var j = i + 1;
  document.getElementById("addItem" + j).addEventListener("click", addToCart);
}
