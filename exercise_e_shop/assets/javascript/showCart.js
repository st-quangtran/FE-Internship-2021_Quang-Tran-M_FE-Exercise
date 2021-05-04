var listCarts = JSON.parse(localStorage.getItem('cart'));
var viewCart = document.getElementById('view-carts');
var viewCountCart = document.getElementById("count-cart");

function showCart() {
  viewCart.innerHTML = "";
  listCarts = JSON.parse(localStorage.getItem('cart'));
  if (listCarts) {
    if (listCarts.length > 0) {
      var totalPrice = 0;
      var countCart = 0;
      viewCart.innerHTML = viewCart.innerHTML + '<ul class="flex-between list-group list-carts row left-cart" id="list-carts"></ul>' +
        '<div id="pay" class="right-cart"></div>';
      listCarts.forEach(function (item) {
        countCart += item.number;
        var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
        viewCountCart.innerHTML = countCart;
        viewCountCart.style.display = "flex";
        var viewPrice = item.discount > 0 ? '<div class="cart-product-discount">' +
            '<p class="discount-price price">' + discountPrice + '</p>' +
            '<p class="product-price price">' + item.price + '</p>' +
          '</div>' +
          '<span class="badge">-' + item.discount + '%</span>' : '<p class="product-price price">' + item.price + '</p>';
        var viewList = document.getElementById("list-carts");
        viewList.innerHTML = viewList.innerHTML + '<li class="col-12 list-item cart-item">' +
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
                '<input type="number" class="input-number text-center" onchange="onChangeNumber(' + item.id + ')"' +
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
          '<button class="btn btn-orange" onclick="pay()">Pay</button>' +
        '</div>';
    }
    else {
      setEmptyCart();
    }
  }
  else {
    setEmptyCart();
  }
}

function setCart() {
  localStorage.setItem('cart', JSON.stringify(listCarts));
}

function setEmptyCart() {
  viewCart.innerHTML = `<div class="text-center">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" class="img img-empty">
      <p class="title-empty">Your cart is empty!</p>
      <a href="home.html#list-products" class="text-uppercase btn btn-orange">buy now</a>
    </div>`;
  viewCountCart.style.display = "none";
  viewCountCart.innerHTML = "";
}

function deleteItem(id) {
  listCarts = listCarts.filter(function (item) {return item.id !== id});
  setCart();
  showCart();
  if (listCarts.length === 0) {
    setEmptyCart();
  }
}

function updateNumberItem(id, number) {
  if (number > 0) {
    var index;
    for (var i = 0; i < listCarts.length; i++) {
      if (listCarts[i].id === id) {
        index = i;
        break;
      }
    }
    console.log(index);
    listCarts[index].number = number;
    setCart();
    showCart();
  }
}

function onChangeNumber(id) {
  var viewNumber = document.getElementById("numberItem" + id);
  if (parseInt(viewNumber.value) > 0) {
    var index;
    for (var i = 0; i < listCarts.length; i++) {
      if (listCarts[i].id === id) {
        index = i;
        break;
      }
    }
    listCarts[index].number = parseInt(viewNumber.value);
  }
  else {
    alert("The number of product can not less 1");
  }
  setCart();
  showCart();
}

function pay() {
  var listPays = listCarts;
  localStorage.setItem('pay', JSON.stringify(listPays));
  listCarts = [];
  setCart();
  showCart();
  alert("Pay success!");
}

showCart();
