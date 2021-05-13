import { Product } from './index.js';

class ListProduct {
  n: number;
  listProduct: Product[];
  constructor(n: number, list: Product[]) {
    this.n = n;
    this.listProduct = list;
  }
  //get list product
  getList(): Product[] {
    return this.listProduct;
  }
  //add product
  addProduct(product: Product): void {
    this.n++;
    this.listProduct.push(product);
  }
}

export { ListProduct };
