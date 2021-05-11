import { updateIconCart, updateItem } from './modules.js';

//fetch data
function fetchData() {
  let listProducts = [
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
  ];
  localStorage.setItem('products', JSON.stringify(listProducts));
  return listProducts;
}

//render view
function render(listProducts) {
  //get view list product
  let viewListProduct = document.getElementById("list-products");
  for (let item of listProducts) {
    //calculator price discount
    let discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
    //view price product if discount > 0 or discount = 0
    let viewPrice = item.discount > 0 ? `<div class="cart-product-discount">
        <p class="discount-price price">${discountPrice}</p>
        <p class="product-price price">${item.price}</p>
      </div>
      <p class="badge">-${item.discount}%</p>` : `<p class="product-price price">${item.price}</p>`;
    //view product
    viewListProduct.innerHTML = viewListProduct.innerHTML + `<li class="col-3 col-sm-6 list-item product-item">
      <div class="product">
        <a href="#" class="img-product">
          <img src="${item.avatar}" class="img" alt="${item.name}">
        </a>
        <h4 class="product-name">${item.name}</h4>` +
      viewPrice +
      `<button class="btn btn-orange" id="addItem${item.id}">Add to cart</button>
        </div>
      </li>`;
  }
  //update number in icon cart
  updateIconCart();
}

//function add product to cart
function addToCart() {
  let cart = localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : [];
  //get product in list product
  let product = listProducts.find(item => "addItem" + item.id === this.id);
  if (cart.length !== 0) {
    let productInCart = cart.find(item => "addItem" + item.id === this.id);
    // if cart don't have product 
    if (productInCart) {
      updateItem(cart, +productInCart.id, productInCart.number + 1);
    }
    //if cart have product
    else {
      addItem(cart, product);
    }
  }
  //if cart is empty
  else {
    addItem(cart, product);
  }
  //update number in icon cart
  updateIconCart();
}

//add new product to cart
function addItem(cart, product) {
  cart.push(product);
  cart[cart.length - 1].number = 1;
  localStorage.setItem('cart', JSON.stringify(cart));
}

//add event
function addEventListener() {
  //add event for button add to cart
  for (let item of listProducts) {
    document.getElementById("addItem" + item.id).addEventListener('click', addToCart);
  }
}

let listProducts = fetchData();
render(listProducts);
addEventListener();
