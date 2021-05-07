function fetchData() {
  return JSON.parse(localStorage.getItem('cart'));
}

function render(cart) {
  var viewCart = document.getElementById('view-carts');
  var titleText = document.getElementById("count-product");
  var quantityCart = 0;
  viewCart.innerHTML = "";
  if (cart) {
    if (cart.length > 0) {
      var totalPrice = 0;
      viewCart.innerHTML = viewCart.innerHTML + '<ul class="flex-between list-group list-carts row left-cart" id="list-carts"></ul>' +
        '<div id="pay" class="right-cart"></div>';
      cart.forEach(function (item) {
        var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
        var viewPrice = item.discount > 0 ? '<div class="cart-product-discount">' +
            '<p class="discount-price price">' + discountPrice + '</p>' +
            '<p class="product-price price">' + item.price + '</p>' +
          '</div>' +
          '<span class="badge">-' + item.discount + '%</span>' : '<p class="product-price price">' + item.price + '</p>';
        var viewListCart = document.getElementById("list-carts");
        viewListCart.innerHTML = viewListCart.innerHTML + '<li class="col-12 list-item cart-item">' +
            '<div class="product product-cart">' +
              '<img src="' + item.avatar + '" class="img img-product" alt="' + item.name  + '">' +
              '<div class="product-info">' +
                '<div class="product-desc">' +
                  '<h4 class="product-name">' + item.name + '</h4>' +
                  '<button class="btn btn-light" onclick="deleteItem(' + item.id + ')">Delete</button>' +
                '</div>' +
          viewPrice +
          '</div>' +
              '<div class="numbers">' +
                '<button class="btn btn-operation" onclick="updateNumberItem(' + item.id + ', ' + (item.number - 1) + ')">-</button>' +
                '<input type="number" class="input-number text-center" onchange="updateNumberItem(' + item.id + ', value)"' +
                 'id="numberItem' + item.id + '" value="' + item.number + '" min="0">' +
                '<button class="btn btn-operation" onclick="updateNumberItem(' + item.id + ', ' + (item.number + 1) + ')">+</button>' +
              '</div>' +
            '</div>' +
          '</li>';
        if (item.discount > 0) {
          var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
          totalPrice += discountPrice * item.number;
        }
        else {
          totalPrice += item.price * item.number;
        }
        quantityCart += item.number;
      });
      var viewPay = document.getElementById('pay');
        viewPay.innerHTML = '<div class="address">' +
            '<p class="text-pay">Address</p>' +
            '<p class="value-pay">Da Nang</p>' +
          '</div>' +
          '<div class="total-price" id="total">' +
            '<p class="text-pay">Total</p>' +
            '<p id="total-price" class="value-pay price-pay price">' + totalPrice.toFixed(2) + '</p>' +
          '</div>' +
          '<div class="text-center">' +
            '<button class="btn btn-orange" onclick="pay(' + totalPrice + ')">Pay</button>' +
          '</div>';    }
    else {
      setEmptyCart(viewCart);
    }
  }
  else {
    setEmptyCart(viewCart);
  }
  if (quantityCart > 1) {
    titleText.innerHTML = "(" + quantityCart + " products)";
  }
  else {
    titleText.innerHTML = "(" + quantityCart + " product)";
  }
  updateIconCart();
}

function updateIconCart() {
  var viewIconCart = document.getElementsByClassName("quantity-cart");
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    if (cart.length > 0) {
      var countCart = 0;
      cart.forEach(function (item) {
        countCart += item.number;
      })
      viewIconCart[0].innerHTML = countCart;
      viewIconCart[0].style.display = "flex";
    }
    else {
      viewIconCart[0].style.display = "none";
    }
  }
  else {
    viewIconCart[0].style.display = "none";
  }
}

function setEmptyCart(viewCart) {
  viewCart.innerHTML = `<div class="text-center">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" class="img img-empty">
      <p class="title-empty">Your cart is empty!</p>
      <a href="home.html#list-products" class="text-uppercase btn btn-orange">buy now</a>
    </div>`;
}

function deleteItem(id) {
  cart = cart.filter(function (item) {return item.id !== id});
  localStorage.setItem('cart', JSON.stringify(cart));
  render(cart);
}

function updateNumberItem(id, number) {
  if (parseInt(number) > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].number = parseInt(number);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  else {
    alert("The number of product can not less 1");
  }
  render(cart);
}

function pay(totalPrice) {
  var pay = {};
  pay.products = cart;
  pay.price = totalPrice;
  localStorage.setItem('pay', JSON.stringify(pay));
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  render();
  alert("Pay success!");
}

var cart = fetchData();
render(cart);
