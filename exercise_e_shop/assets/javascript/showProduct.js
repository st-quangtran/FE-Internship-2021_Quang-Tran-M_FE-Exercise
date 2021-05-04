var listItems = [
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
]

var listProduct = document.getElementById("list-products");
var viewCountCart = document.getElementsByClassName("count-cart");

if (listProduct) {
  listItems.forEach(function (item) {
    var discountPrice = (item.price - item.price * item.discount / 100).toFixed(2);
    var viewPrice = item.discount > 0 ? '<div class="cart-product-discount">' +
        '<p class="discount-price">$' + discountPrice + '</p>' +
        '<p class="product-price">$' + item.price + '</p>' +
      '</div>' +
      '<p class="badge">-' + item.discount + '%</p>' : '<p class="product-price price">' + item.price + '</p>';
    listProduct.innerHTML = listProduct.innerHTML + '<li class="col-3 col-sm-6 list-item product-item">' +
      '<div class="product">' +
        '<a href="#" class="img-product">' +
          '<img src="' + item.avatar + '" class="img" alt="' + item.name + '">' +
        '</a>' +
        '<h4 class="product-name">' + item.name + '</h4>' +
        viewPrice +
        '<button class="btn btn-orange" onclick="addToCart(' + item.id + ')">Add to cart</button>' +
        '</div>' +
      '</li>';
  });
  setCountCart();
}

function setCountCart() {
  var listCarts = JSON.parse(localStorage.getItem('cart'));
  if (listCarts) {
    if (listCarts.length > 0) {
      var countCart = 0;
      listCarts.forEach(function (item) {
        countCart += item.number;
      })
      viewCountCart[0].innerHTML = countCart;
      viewCountCart[0].style.display = "flex";
    }
    else {
      viewCountCart[0].style.display = "none";
    }
  }
  else {
    viewCountCart[0].style.display = "none";
  }
}

function addToCart(id) {
  var cart = localStorage.getItem('cart');
  var indexOfListItems;
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i].id === id) {
      indexOfListItems = i;
      break;
    }
  }
  var listCarts;
  if (cart) {
    listCarts = JSON.parse(cart);
    var indexOfListCarts;
    for (var i = 0; i < listCarts.length; i++) {
      if (listCarts[i].id === id) {
        indexOfListCarts = i;
        break;
      }
    }
    if (indexOfListCarts === undefined) {
      console.log("a");
      listCarts.push(listItems[indexOfListItems]);
      listCarts[listCarts.length - 1].number = 1;
    }
    else {
      console.log("b");
      listCarts[indexOfListCarts].number++;
    }
  }
  else {
    listCarts = [];
    listCarts.push(listItems[indexOfListItems]);
    listCarts[listCarts.length - 1].number = 1;
  }
  localStorage.setItem('cart', JSON.stringify(listCarts));
  setCountCart();
}
