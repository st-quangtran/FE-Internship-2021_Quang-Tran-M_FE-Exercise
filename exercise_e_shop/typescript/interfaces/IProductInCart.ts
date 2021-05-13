import { IProduct } from './IProduct.js';

type IProductInCart = IProduct & {
  number: number;
}

export { IProductInCart };
