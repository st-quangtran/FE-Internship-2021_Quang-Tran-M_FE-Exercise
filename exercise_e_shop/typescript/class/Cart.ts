import { IProductInCart } from '../interfaces/IProductInCart.js';
import { Product } from './index.js';

class Cart extends Product implements IProductInCart {
  number: number;
  constructor(product: IProductInCart) {
    super(product);
    this.number = product.number;
  }
  updateNumber(number: number) {
    this.number = number;
  }
}

export { Cart }; 
