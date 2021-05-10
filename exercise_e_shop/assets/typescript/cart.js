"use strict";
exports.__esModule = true;
var modules_1 = require("./modules");
//fetch data cart
function fetchData() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
//render view cart
function render(cart) {
    var viewCart = document.getElementById('view-carts');
    var titleQuantity = document.getElementById("count-product");
    //variable quantity of product in cart
    var quantityCart = 0;
    viewCart.innerHTML = "";
    //if cart isn't empty
    if (cart.length) {
        //variable total price of cart
        var totalPrice_1 = 0;
        //create ul and view pay
        viewCart.innerHTML = viewCart.innerHTML + "<ul class=\"flex-between list-group list-carts row left-cart\" id=\"list-carts\"></ul>\n      <div id=\"pay\" class=\"right-cart\"></div>";
        cart.forEach(function (item) {
            //calculator discount price of product
            var discountPrice = parseFloat((item.price - item.price * item.discount / 100).toFixed(2));
            //get tag ul of list cart in html
            var viewListCart = document.getElementById("list-carts");
            //view product of cart
            viewListCart.innerHTML = viewListCart.innerHTML + ("<li class=\"col-12 list-item cart-item\">\n          <div class=\"product product-cart\">\n            " + viewInfoProduct(item, discountPrice) + "\n            " + viewNumberProduct(item) + "\n          </div>\n        </li>");
            //calculator total price of cart
            totalPrice_1 += item.discount > 0 ? discountPrice * item.number : item.price * item.number;
            //calculator quantity product of cart
            quantityCart += item.number;
        });
        //create view payment
        viewPayment(totalPrice_1);
    }
    //if cart is empty
    else {
        setEmptyCart(viewCart);
    }
    //show quantity product in title cart
    titleQuantity.innerHTML = quantityCart > 1 ? "(" + quantityCart + " products)" : "(" + quantityCart + " product)";
    //update number in icon cart
    modules_1.updateIconCart();
    //set event
    addEventListener();
}
//function create view name, des, price of product
function viewInfoProduct(item, discountPrice) {
    return "<img src=\"" + item.avatar + "\" class=\"img img-product\" alt=\"" + item.name + "\">\n    <div class=\"product-info\">\n      <div class=\"product-desc\">\n        <h4 class=\"product-name\">" + item.name + "</h4>\n        <button class=\"btn btn-light\" id=\"deleteItem" + item.id + "\">Delete</button>\n      </div>\n    " + viewPriceProduct(item, discountPrice) + "\n    </div>";
}
//function create view price product
function viewPriceProduct(item, discountPrice) {
    var viewPrice = item.discount > 0 ? "<div class=\"cart-product-discount\">\n      <p class=\"discount-price price\">" + discountPrice + "</p>\n      <p class=\"product-price price\">" + item.price + "</p>\n    </div>\n    <span class=\"badge\">-" + item.discount + "%</span>" : "<p class=\"product-price price\">" + item.price + "</p>";
    return viewPrice;
}
//function create view quantity of product in cart
function viewNumberProduct(item) {
    return "<div class=\"numbers\">\n    <button class=\"btn btn-operation\" data-id=\"" + item.id + "\" data-new-quantity=\"" + (item.number - 1) + "\">-</button>\n    <input type=\"number\" class=\"input-number text-center\" id=\"numberItem" + item.id + "\" data-new-quantity=\"" + item.number + "\" data-id=\"" + item.id + "\" value=\"" + item.number + "\">\n    <button class=\"btn btn-operation\" data-id=\"" + item.id + "\" data-new-quantity=\"" + (item.number + 1) + "\">+</button>\n  </div>";
}
//function create view payment
function viewPayment(totalPrice) {
    var viewPay = document.getElementById('pay');
    viewPay.innerHTML = "<div class=\"address\">\n      <p class=\"text-pay\">Address</p>\n      <p class=\"value-pay\">Da Nang</p>\n    </div>\n    <div class=\"total-price\" id=\"total\">\n      <p class=\"text-pay\">Total</p>\n      <p id=\"total-price\" class=\"value-pay price-pay price\">" + totalPrice.toFixed(2) + "</p>\n    </div>\n    <div class=\"text-center\">\n      <button class=\"btn btn-orange\" id=\"pay\">Pay</button\n    </div>";
    //add event for button "PAY"
    document.getElementById("pay").addEventListener('click', pay);
}
//function create view cart if cart empty
function setEmptyCart(viewCart) {
    viewCart.innerHTML = "<div class=\"text-center\">\n      <img src=\"https://salt.tikicdn.com/desktop/img/mascot@2x.png\" class=\"img img-empty\">\n      <p class=\"title-empty\">Your cart is empty!</p>\n      <a href=\"home.html#list-products\" class=\"text-uppercase btn btn-orange\">buy now</a>\n    </div>";
}
//function delete product in cart
function deleteItem() {
    var _this = this;
    cart = cart.filter(function (item) { return "deleteItem" + item.id !== _this.id; });
    localStorage.setItem('cart', JSON.stringify(cart));
    render(cart);
}
//function pay when click button "PAY"
function pay() {
    var totalPrice = document.getElementsByClassName("price-pay")[0].innerHTML;
    //add list products in cart and total price to new object
    var pay;
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
    var operation = document.getElementsByClassName("btn-operation");
    var _loop_1 = function (o) {
        var id = +o.getAttribute('data-id');
        var quantity = +o.getAttribute('data-new-quantity');
        o.addEventListener('click', function () {
            modules_1.updateItem(cart, id, quantity);
            render(cart);
        });
    };
    for (var _i = 0, operation_1 = operation; _i < operation_1.length; _i++) {
        var o = operation_1[_i];
        _loop_1(o);
    }
    //add event for input number of product
    var input = document.getElementsByClassName("input-number");
    var _loop_2 = function (i) {
        i.addEventListener('change', function () {
            var id = +i.getAttribute('data-id');
            var quantity = +i.getAttribute('data-new-quantity');
            var newQuantity = +i.getAttribute('value') || quantity;
            modules_1.updateItem(cart, id, newQuantity);
            render(cart);
        });
    };
    for (var _a = 0, input_1 = input; _a < input_1.length; _a++) {
        var i = input_1[_a];
        _loop_2(i);
    }
    //add event for button "Delete"
    cart.forEach(function (item) {
        document.getElementById("deleteItem" + item.id).addEventListener('click', deleteItem);
    });
}
var cart = fetchData();
render(cart);
