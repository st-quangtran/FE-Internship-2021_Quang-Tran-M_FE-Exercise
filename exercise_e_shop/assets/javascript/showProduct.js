function fetchData() {
  var listProducts = [
    {
      "id": 1,
      "name": "T-Shirt Summer Vibes",
      "price": 119.99,
      "discount": 30,
      "avatar": "assets/images/item1.png",
      "number": 20,
    },
    {
      "id": 2,
      "name": "Loose Knit 3/4 Sleeve",
      "price": 119.99,
      "discount": 30,
      "avatar": "assets/images/item2.png",
      "number": 25,
    },
    {
      "id": 3,
      "name": "Basic Slim Fit T-Shirt",
      "price": 79.99,
      "discount": 30,
      "avatar": "assets/images/item3.png",
      "number": 10,
    },
    {
      "id": 4,
      "name": "Loose Textured T-Shirt",
      "price": 119.99,
      "discount": 0,
      "avatar": "assets/images/item4.png",
      "number": 8,
    },
  ];
  localStorage.setItem('products', JSON.stringify(listProducts));
  return listProducts;
}

function render(listProducts) {
  var viewListProduct = document.getElementById("list-products");
  listProducts.forEach(function (item) {
    var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
    var viewPrice = item.discount > 0 ? '<div class="cart-product-discount">' +
        '<p class="discount-price">$' + discountPrice + '</p>' +
        '<p class="product-price">$' + item.price + '</p>' +
      '</div>' +
      '<p class="badge">-' + item.discount + '%</p>' : '<p class="product-price price">' + item.price + '</p>';
      viewListProduct.innerHTML = viewListProduct.innerHTML + '<li class="col-3 col-sm-6 list-item product-item">' +
      '<div class="product">' +
        '<a href="#" class="img-product">' +
          '<img src="' + item.avatar + '" class="img" alt="' + item.name + '">' +
        '</a>' +
        '<h4 class="product-name">' + item.name + '</h4>' +
        viewPrice +
        '<button class="btn btn-orange" onclick="addToCart(listProducts, ' + item.id + ')">Add to cart</button>' +
        '</div>' +
      '</li>';
  });
  updateIconCart();
}

function addToCart(listProducts, id) {
  var cart = localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : [];
  var product;
  listProducts.forEach(function(item) {
    if (item.id === id) {
      product = item;
    }
  })
  if (cart.length !== 0) {
    var exist;
    cart.forEach(function(item) {
      exist = item.id === id ? 1 : 0;
    })
    if (exist === 1) {
      updateItem(cart, product);
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
  cart.push(product);
  cart[cart.length - 1].number = 1;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateItem(cart, product) {
  cart.forEach(function(item) {
    if (item.id === product.id) {
      console.log("a"); 
      item.number++;
    }
  })
  localStorage.setItem('cart', JSON.stringify(cart)); 
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

var listProducts = fetchData();
render(listProducts);
