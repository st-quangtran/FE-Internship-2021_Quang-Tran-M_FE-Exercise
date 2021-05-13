import { IProduct } from '../interfaces/IProduct.js';

class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  avatar: string;
  constructor(product: IProduct) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.discount = product.discount;
    this.avatar = product.avatar;
  }
}

export { Product };
