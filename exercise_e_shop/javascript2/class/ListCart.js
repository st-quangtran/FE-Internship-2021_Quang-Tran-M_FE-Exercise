class ListCart {
  constructor(n, list) {
    this.n = n;
    this.listCart = list;
  }
  getList() {
    return this.listCart;
  }
  setList(newList) {
    this.listCart = newList;
  }
  getLength() {
    return this.n;
  }
  addProductToCart(product) {
    this.n++;
    this.listCart.push(product);
  }
  deleteProduct(id) {
    this.n--;
    this.listCart = this.listCart.filter(item => 'deleteItem' + item.id !== id);
  }
}
export { ListCart };
