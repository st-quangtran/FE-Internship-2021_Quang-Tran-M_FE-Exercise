let updateIconCart = function () {
  let viewIconCart = document.getElementsByClassName('quantity-cart');
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    if (cart.length > 0) {
      let quantityCart = 0;
      for (let item of cart) {
        quantityCart += item.number;
      }
      viewIconCart[0].innerHTML = quantityCart.toString();
      viewIconCart[0].style.display = 'flex';
    }
    else {
      viewIconCart[0].style.display = 'none';
    }
  }
  else {
    viewIconCart[0].style.display = 'none';
  }
};
let updateItem = function (cart, id, quantity) {
  if (quantity > 0) {
    let item = cart.find(item => item.id === id);
    item.number = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  else {
    alert('The number of product can not less 1');
  }
};
export { updateIconCart, updateItem };
