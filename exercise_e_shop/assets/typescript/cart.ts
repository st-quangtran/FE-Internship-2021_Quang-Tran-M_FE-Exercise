import { ProductInCart } from './class';
import { updateIconCart, updateItem } from './modules';

//fetch data cart
function fetchData(): ProductInCart[]{
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

//render view cart
function render(cart: ProductInCart[]) {
  let viewCart: Element = document.getElementById('view-carts');
  let titleQuantity: Element = document.getElementById("count-product");
  //variable quantity of product in cart
  let quantityCart: number = 0;
  viewCart.innerHTML = "";
  //if cart isn't empty
  if (cart.length) {
    //variable total price of cart
    let totalPrice: number = 0;
    //create ul and view pay
    viewCart.innerHTML = viewCart.innerHTML + `<ul class="flex-between list-group list-carts row left-cart" id="list-carts"></ul>
      <div id="pay" class="right-cart"></div>`;
    cart.forEach(item => {
      //calculator discount price of product
      let discountPrice: number = parseFloat((item.price - item.price * item.discount / 100).toFixed(2));
      //get tag ul of list cart in html
      let viewListCart = document.getElementById("list-carts");
      //view product of cart
      viewListCart.innerHTML = viewListCart.innerHTML + `<li class="col-12 list-item cart-item">
          <div class="product product-cart">
            ${viewInfoProduct(item, discountPrice)}
            ${viewNumberProduct(item)}
          </div>
        </li>`;
      //calculator total price of cart
      totalPrice += item.discount > 0 ? discountPrice * item.number : item.price * item.number;
      //calculator quantity product of cart
      quantityCart += item.number;
    });
    //create view payment
    viewPayment(totalPrice);
  }
  //if cart is empty
  else {
    setEmptyCart(viewCart);
  }
  //show quantity product in title cart
  titleQuantity.innerHTML = quantityCart > 1 ? "(" + quantityCart + " products)" : "(" + quantityCart + " product)";
  //update number in icon cart
  updateIconCart();
  //set event
  addEventListener();
}

//function create view name, des, price of product
function viewInfoProduct(item: ProductInCart, discountPrice: number): string {
  return `<img src="${item.avatar}" class="img img-product" alt="${item.name}">
    <div class="product-info">
      <div class="product-desc">
        <h4 class="product-name">${item.name}</h4>
        <button class="btn btn-light" id="deleteItem${item.id}">Delete</button>
      </div>
    ${viewPriceProduct(item, discountPrice)}
    </div>`;
}

//function create view price product
function viewPriceProduct(item: ProductInCart, discountPrice: number): string {
  let viewPrice: string = item.discount > 0 ? `<div class="cart-product-discount">
      <p class="discount-price price">${discountPrice}</p>
      <p class="product-price price">${item.price}</p>
    </div>
    <span class="badge">-${item.discount}%</span>` : `<p class="product-price price">${item.price}</p>`;
  return viewPrice;
}

//function create view quantity of product in cart
function viewNumberProduct(item: ProductInCart): string {
  return `<div class="numbers">
    <button class="btn btn-operation" data-id="${item.id}" data-new-quantity="${item.number - 1}">-</button>
    <input type="number" class="input-number text-center" id="numberItem${item.id}" data-new-quantity="${item.number}" data-id="${item.id}" value="${item.number}">
    <button class="btn btn-operation" data-id="${item.id}" data-new-quantity="${item.number + 1}">+</button>
  </div>`;
}

//function create view payment
function viewPayment(totalPrice: number) {
  let viewPay = document.getElementById('pay');
  viewPay.innerHTML = `<div class="address">
      <p class="text-pay">Address</p>
      <p class="value-pay">Da Nang</p>
    </div>
    <div class="total-price" id="total">
      <p class="text-pay">Total</p>
      <p id="total-price" class="value-pay price-pay price">${totalPrice.toFixed(2)}</p>
    </div>
    <div class="text-center">
      <button class="btn btn-orange" id="pay">Pay</button
    </div>`;
  //add event for button "PAY"
  document.getElementById("pay").addEventListener('click', pay);
}

//function create view cart if cart empty
function setEmptyCart(viewCart: Element) {
  viewCart.innerHTML = `<div class="text-center">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" class="img img-empty">
      <p class="title-empty">Your cart is empty!</p>
      <a href="home.html#list-products" class="text-uppercase btn btn-orange">buy now</a>
    </div>`;
}

//function delete product in cart
function deleteItem() {
  cart = cart.filter(item => "deleteItem" + item.id !== this.id);
  localStorage.setItem('cart', JSON.stringify(cart));
  render(cart);
}

//function pay when click button "PAY"
function pay() {
  let totalPrice = document.getElementsByClassName("price-pay")[0].innerHTML
  //add list products in cart and total price to new object
  let pay:  {
    products: ProductInCart[];
    price: number
  };
  pay.products = cart;
  pay.price = +totalPrice;
  localStorage.setItem('pay', JSON.stringify(pay));
  //clean list products in cart
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Pay success!");
  render(cart);
}

//function add event 
function addEventListener() {
  //add event for button "+", "-"
  let operation = document.getElementsByClassName("btn-operation");
  for (let o of operation) {
    let id: number = +o.getAttribute('data-id');
    let quantity: number = +o.getAttribute('data-new-quantity');
    o.addEventListener('click', () => {
      updateItem(cart, id, quantity);
      render(cart)
    });
  }
  //add event for input number of product
  let input = document.getElementsByClassName("input-number");
  for (let i of input) {
    i.addEventListener('change', () => {
      let id: number = +i.getAttribute('data-id');
      let quantity: number = +i.getAttribute('data-new-quantity');
      let newQuantity: number = +i.getAttribute('value') || quantity;
      updateItem(cart, id, newQuantity);
      render(cart);
    });
  }
  //add event for button "Delete"
  cart.forEach(item => {
    document.getElementById("deleteItem" + item.id).addEventListener('click', deleteItem);
  })
}

let cart: ProductInCart[] = fetchData();
render(cart);
