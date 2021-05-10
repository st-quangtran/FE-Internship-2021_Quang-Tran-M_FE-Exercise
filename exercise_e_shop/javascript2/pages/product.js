import { updateIconCart, updateItem } from '../common/modules.js';
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
function render(listProducts) {
    let viewListProduct = document.getElementById("list-products");
    for (let item of listProducts) {
        let discountPrice = parseFloat((item.price - item.price * item.discount / 100).toFixed(2));
        let viewPrice = item.discount > 0 ? `<div class="cart-product-discount">
        <p class="discount-price price">${discountPrice}</p>
        <p class="product-price price">${item.price}</p>
      </div>
      <p class="badge">-${item.discount}%</p>` : `<p class="product-price price">${item.price}</p>`;
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
    updateIconCart();
}
function addToCart() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let product = listProducts.find(item => "addItem" + item.id === this.id);
    if (cart.length !== 0) {
        let productInCart = cart.find(item => "addItem" + item.id === this.id);
        if (productInCart) {
            updateItem(cart, +productInCart.id, productInCart.number + 1);
        }
        else {
            addItem(cart, product);
        }
    }
    else {
        addItem(cart, product);
    }
    updateIconCart();
}
function addItem(cart, product) {
    let productAdd = Object.assign(Object.assign({}, product), { number: 1 });
    cart.push(productAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addEventListener() {
    for (let item of listProducts) {
        document.getElementById("addItem" + item.id).addEventListener('click', addToCart);
    }
}
let listProducts = fetchData();
render(listProducts);
addEventListener();
