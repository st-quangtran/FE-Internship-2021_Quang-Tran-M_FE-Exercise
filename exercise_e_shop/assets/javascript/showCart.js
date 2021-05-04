var listCarts = JSON.parse(localStorage.getItem('cart'));
var viewCart = document.getElementById('view-carts');
var viewCountCart = document.getElementById("count-cart");

function showCart() {
  viewCart.innerHTML = "";
  listCarts = JSON.parse(localStorage.getItem('cart'));
  if (listCarts) {
    if (listCarts.length > 0) {
      listCarts.forEach((item) => {
        var discountPrice = (item.price - item.price*item.discount/100).toFixed(2);
        var a = item.discount > 0 ? `<div class="cart-product-discount">
            <p class="discount-price">` + setPrice(discountPrice) + `</p>
            <p class="product-price">` + setPrice(item.price) + `</p>
          </div>
          <span class="badge">-${item.discount}%</span>` : `<p class="product-price">` + setPrice(item.price) + `</p>`;
        viewCart.innerHTML = viewCart.innerHTML + `<ul class="flex-between list-group list-carts row left-cart" id="list-carts"></ul>` + 
            `<div id="pay" class="right-cart"></div>`;
        var viewList = document.getElementById("list-carts");
        viewList.innerHTML = viewList.innerHTML + `<li class="col-12 col-sm-6 list-item cart-item">
            <div class="product product-cart">
              <img src="${item.avatar}" class="img img-product" alt="${item.name}">
              <div class="product-info">
                <div class="product-desc">
                  <h4 class="product-name">${item.name}</h4>
                  <button class="btn btn-light" onclick="deleteItem(${item.id})">Delete</button>
                </div>` +
                a +
              `</div>
              <div class="numbers">
                <button class="btn btn-operation" onclick="updateNumberItem(${item.id}, ${item.number - 1})">-</button>
                <input type="number" class="input-number text-center" onchange="onChangeNumber(${item.id})" id="numberItem${item.id}" value="${item.number}" min="0">
                <button class="btn btn-operation" onclick="updateNumberItem(${item.id}, ${item.number + 1})">+</button>
              </div>
            </div>
          </li>`;
        var viewPay = document.getElementById('pay');
        var totalPrice = 0;
        listCarts.forEach((item) => {
          if (item.discount > 0) {
            var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
            totalPrice += discountPrice * item.number;
          }
          else {
            totalPrice += item.price * item.number;
          }
        });
        viewPay.innerHTML = `<div class="address">
            <p class="text-pay">Address</p>
            <p class="value-pay">Da Nang</p>
          </div>
          <div class="total-price" id="total">
            <p class="text-pay">Total</p>
            <p id="total-price" class="value-pay price-pay">` + setPrice(totalPrice.toFixed(2)) + `</p>
          </div>
          <div class="text-center">
            <button class="btn btn-orange">Pay</button>
          </div>`;
      });
      setCountCart();
    }
    else {
      setNullCart();
    }
  }
  else {
    setNullCart();
  }
}

function setPrice(price) {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(price);
}

function setTotalPrice() {
  if (listCarts) {
    var viewPay = document.getElementById('pay');
    if (listCarts.length > 0) {
      var totalPrice = 0;
      listCarts.forEach((item) => {
        if (item.discount > 0) {
          var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
          totalPrice += discountPrice * item.number;
        }
        else {
          totalPrice += item.price * item.number;
        }
      });
      viewPay.innerHTML = `<div class="address">
            <span class="text-pay">Address</span>
            <span class="value-pay">Da Nang</span>
          </div>
          <div class="total-price" id="total">
            <span class="text-pay">Total</span>
            <span id="total-price" class="value-pay price-pay">` + setPrice(totalPrice.toFixed(2)) + `</span>
          </div>
          <div class="text-center">
            <button class="btn btn-orange">Pay</button>
          </div>`;
    }
    else {
      viewPay.innerHTML = "";
    }
  }
}

function setCountCart() {
  if (listCarts) {
    if (listCarts.length > 0) {
      var countCart = 0;
      listCarts.forEach((item) => {
        countCart += item.number;
      })
      viewCountCart.innerHTML = countCart;
      viewCountCart.style.display = "flex";
    } 
    else {
      viewCountCart.style.display = "none";
    }
  }
  else {
    viewCountCart.style.display = "none";
  }
}

function setCart() {
  localStorage.setItem('cart', JSON.stringify(listCarts));
}

function setNullCart() {
  viewCart.innerHTML = `<div class="text-center view-carts">
    <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" class="img img-empty">
    <p class="title-empty">Your cart is empty!</p>
    <a href="home.html" class="text-uppercase btn btn-orange">buy now</a>
  </div>`;
  setCountCart();
}

function deleteItem(id) {
  listCarts = listCarts.filter(item => item.id !== id);
  setCart();
  showCart();
  if (listCarts.length === 0) {
    setNullCart();
  }
}

function updateNumberItem(id, number) {
  if (number > 0) {
    var index = listCarts.findIndex(item => item.id === id);
    listCarts[index].number = number;
    setCart();
    showCart();
  }
}

function onChangeNumber(id) {
  console.log("a");
  var viewNumber = document.getElementById("numberItem" + id);
  if (parseInt(viewNumber.value) > 0) {
    var index = listCarts.findIndex(item => item.id === id);
    listCarts[index].number = parseInt(viewNumber.value);
  }
  else {
    alert("Số lượng sản phẩm không thể nhỏ hơn 1");
  }
  setCart();
  showCart();
}

showCart();
