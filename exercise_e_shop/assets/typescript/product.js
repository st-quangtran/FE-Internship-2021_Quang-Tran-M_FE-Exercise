"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var modules_1 = require("./modules");
//fetch data
function fetchData() {
    var listProducts = [
        {
            "id": 1,
            "name": "T-Shirt Summer Vibes",
            "price": 119.99,
            "discount": 30,
            "avatar": "assets/images/item1.png"
        },
        {
            "id": 2,
            "name": "Loose Knit 3/4 Sleeve",
            "price": 119.99,
            "discount": 30,
            "avatar": "assets/images/item2.png"
        },
        {
            "id": 3,
            "name": "Basic Slim Fit T-Shirt",
            "price": 79.99,
            "discount": 30,
            "avatar": "assets/images/item3.png"
        },
        {
            "id": 4,
            "name": "Loose Textured T-Shirt",
            "price": 119.99,
            "discount": 0,
            "avatar": "assets/images/item4.png"
        },
    ];
    localStorage.setItem('products', JSON.stringify(listProducts));
    return listProducts;
}
//render view
function render(listProducts) {
    //get view list product
    console.log("a");
    var viewListProduct = document.getElementById("list-products");
    listProducts.forEach(function (item) {
        //calculator price discount
        var discountPrice = parseFloat((item.price - item.price * item.discount / 100).toFixed(2));
        //view price product if discount > 0 or discount = 0
        var viewPrice = item.discount > 0 ? "<div class=\"cart-product-discount\">\n        <p class=\"discount-price price\">" + discountPrice + "</p>\n        <p class=\"product-price price\">" + item.price + "</p>\n      </div>\n      <p class=\"badge\">-" + item.discount + "%</p>" : "<p class=\"product-price price\">" + item.price + "</p>";
        //view product
        viewListProduct.innerHTML = viewListProduct.innerHTML + ("<li class=\"col-3 col-sm-6 list-item product-item\">\n      <div class=\"product\">\n        <a href=\"#\" class=\"img-product\">\n          <img src=\"" + item.avatar + "\" class=\"img\" alt=\"" + item.name + "\">\n        </a>\n        <h4 class=\"product-name\">" + item.name + "</h4>") +
            viewPrice +
            ("<button class=\"btn btn-orange\" id=\"addItem" + item.id + "\">Add to cart</button>\n        </div>\n      </li>");
    });
    //update number in icon cart
    modules_1.updateIconCart();
}
//function add product to cart
function addToCart() {
    var _this = this;
    // let cart = localStorage.getItem('cart');
    var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    //get product in list product
    var product = listProducts.find(function (item) { return "addItem" + item.id === _this.id; });
    if (cart.length !== 0) {
        var productInCart = cart.find(function (item) { return "addItem" + item.id === _this.id; });
        // if cart don't have product 
        if (productInCart) {
            modules_1.updateItem(cart, +productInCart.id, productInCart.number + 1);
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
    modules_1.updateIconCart();
}
//add new product to cart
function addItem(cart, product) {
    var productAdd = __assign(__assign({}, product), { number: 1 });
    cart.push(productAdd);
    // cart[cart.length - 1].number = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
}
//add event
function addEventListener() {
    //add event for button add to cart
    listProducts.forEach(function (item) {
        document.getElementById("addItem" + item.id).addEventListener('click', addToCart);
    });
}
var listProducts = fetchData();
render(listProducts);
addEventListener();
