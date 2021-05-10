import { IProduct, IProductInCart } from './interfaces';

class Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  avatar: string;
  constructor(value: IProduct) {
    this.id = value.id;
    this.name = value.name;
    this.price = value.price;
    this.discount = value.discount;
    this.avatar = value.avatar;
  };
}
class ProductInCart extends Product {
  number: number;
  constructor(value: IProductInCart) {
    super(value);
    this.number = value.number;
  };
}

export { Product, ProductInCart };
