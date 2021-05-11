import { IProductInCart } from '../interfaces/index.js'; 

//function update icon cart
let updateIconCart = function (): void {
  let viewIconCart: any = document.getElementsByClassName('quantity-cart');
  let cart: IProductInCart[] = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    if (cart.length > 0) {
      let quantityCart: number = 0;
      for (let item of cart) {
        quantityCart += item.number;
      }
      viewIconCart[0].innerHTML = quantityCart.toString();
      viewIconCart[0].style.display = 'flex';
    } else {
      viewIconCart[0].style.display = 'none';
    }
  } else {
    viewIconCart[0].style.display = 'none';
  }
};

//function update item in cart
let updateItem = function (cart: IProductInCart[], id: number, quantity: number) {
  if (quantity > 0) {
    let item: IProductInCart = cart.find(item => item.id === id);
    item.number = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    alert('The number of product can not less 1');
  }
}

export { updateIconCart, updateItem };
