import { updateIconCart, updateItem } from '../common/modules.js';
function fetchData() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
function render(cart) {
    let viewCart = document.getElementById('view-carts');
    let titleQuantity = document.getElementById("count-product");
    let quantityCart = 0;
    viewCart.innerHTML = "";
    if (cart.length) {
        let totalPrice = 0;
        viewCart.innerHTML = viewCart.innerHTML + `<ul class="flex-between list-group list-carts row left-cart" id="list-carts"></ul>
      <div id="pay" class="right-cart"></div>`;
        for (let item of cart) {
            let discountPrice = parseFloat((item.price - item.price * item.discount / 100).toFixed(2));
            let viewListCart = document.getElementById("list-carts");
            viewListCart.innerHTML = viewListCart.innerHTML + `<li class="col-12 list-item cart-item">
          <div class="product product-cart">
            ${viewInfoProduct(item, discountPrice)}
            ${viewNumberProduct(item)}
          </div>
        </li>`;
            totalPrice += item.discount > 0 ? discountPrice * item.number : item.price * item.number;
            quantityCart += item.number;
        }
        viewPayment(totalPrice);
    }
    else {
        setEmptyCart(viewCart);
    }
    titleQuantity.innerHTML = quantityCart > 1 ? "(" + quantityCart + " products)" : "(" + quantityCart + " product)";
    updateIconCart();
    addEventListener();
}
function viewInfoProduct(item, discountPrice) {
    return `<img src="${item.avatar}" class="img img-product" alt="${item.name}">
    <div class="product-info">
      <div class="product-desc">
        <h4 class="product-name">${item.name}</h4>
        <button class="btn btn-light" id="deleteItem${item.id}">Delete</button>
      </div>
    ${viewPriceProduct(item, discountPrice)}
    </div>`;
}
function viewPriceProduct(item, discountPrice) {
    let viewPrice = item.discount > 0 ? `<div class="cart-product-discount">
      <p class="discount-price price">${discountPrice}</p>
      <p class="product-price price">${item.price}</p>
    </div>
    <span class="badge">-${item.discount}%</span>` : `<p class="product-price price">${item.price}</p>`;
    return viewPrice;
}
function viewNumberProduct(item) {
    return `<div class="numbers">
    <button class="btn btn-operation" data-id="${item.id}" data-new-quantity="${item.number - 1}">-</button>
    <input type="number" class="input-number text-center" id="numberItem${item.id}" data-new-quantity="${item.number}" data-id="${item.id}" value="${item.number}">
    <button class="btn btn-operation" data-id="${item.id}" data-new-quantity="${item.number + 1}">+</button>
  </div>`;
}
function viewPayment(totalPrice) {
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
    document.getElementById("pay").addEventListener('click', pay);
}
function setEmptyCart(viewCart) {
    viewCart.innerHTML = `<div class="text-center">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" class="img img-empty">
      <p class="title-empty">Your cart is empty!</p>
      <a href="home.html#list-products" class="text-uppercase btn btn-orange">buy now</a>
    </div>`;
}
function deleteItem() {
    cart = cart.filter(item => "deleteItem" + item.id !== this.id);
    localStorage.setItem('cart', JSON.stringify(cart));
    render(cart);
}
function pay() {
    let totalPrice = document.getElementsByClassName("price-pay")[0].innerHTML;
    let pay;
    pay.products = cart;
    pay.price = +totalPrice;
    localStorage.setItem('pay', JSON.stringify(pay));
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Pay success!");
    render(cart);
}
function addEventListener() {
    let operation = document.getElementsByClassName("btn-operation");
    for (let o of operation) {
        let id = +o.getAttribute('data-id');
        let quantity = +o.getAttribute('data-new-quantity');
        o.addEventListener('click', () => {
            updateItem(cart, id, quantity);
            render(cart);
        });
    }
    let input = document.getElementsByClassName("input-number");
    for (let i of input) {
        i.addEventListener('change', () => {
            let id = +i.getAttribute('data-id');
            let quantity = +i.getAttribute('data-new-quantity');
            let newQuantity = +i.value || quantity;
            updateItem(cart, id, newQuantity);
            render(cart);
        });
    }
    for (let item of cart) {
        document.getElementById("deleteItem" + item.id).addEventListener('click', deleteItem);
    }
}
let cart = fetchData();
render(cart);
