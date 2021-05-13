import { Cart } from './index.js';

class ListCart {
  n: number;
  listCart: Cart[];
  constructor(n: number, list: Cart[]) {
    this.n = n;
    this.listCart = list;
  }
  //get list product in cart
  getList(): Cart[] {
    return this.listCart;
  }
  //set list product in cart
  setList(newList: Cart[]): void {
    this.listCart = newList;
  }
  //get length cart
  getLength(): number {
    return this.n;
  }
  //add product to cart
  addProductToCart(product: Cart): void {
    this.n++;
    this.listCart.push(product);
  }
  //delete product
  deleteProduct(id: string): void {
    this.n--;
    this.listCart = this.listCart.filter(item => 'deleteItem' + item.id !== id);
  }
}

export { ListCart };
