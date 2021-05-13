import { Product } from './index.js';
class Cart extends Product {
  constructor(product) {
    super(product);
    this.number = product.number;
  }
  updateNumber(number) {
    this.number = number;
  }
}
export { Cart };
