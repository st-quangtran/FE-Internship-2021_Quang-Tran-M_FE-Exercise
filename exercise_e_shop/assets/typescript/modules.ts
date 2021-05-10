//function update icon cart
var updateIconCart = function (): void {
  var viewIconCart = document.getElementsByClassName("quantity-cart");
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    if (cart.length > 0) {
      var quantityCart = 0;
      cart.forEach(function (item) {
        quantityCart += item.number;
      })
      viewIconCart[0].innerHTML = quantityCart.toString();
      viewIconCart[0].setAttribute('style', 'display: flex');
    }
    else {
      viewIconCart[0].setAttribute('style', 'display: none');
    }
  }
  else {
    viewIconCart[0].setAttribute('style', 'display: none');
  }
};

//function update item in cart
var updateItem = function (cart: IProductInCart[], id: number, quantity: number) {
  if (quantity > 0) {
    let item: IProductInCart = cart.find(item => item.id === id);
    item.number = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  //if quantity <= 0, warning to user
  else {
    alert("The number of product can not less 1");
  }
}

export { updateIconCart, updateItem };
