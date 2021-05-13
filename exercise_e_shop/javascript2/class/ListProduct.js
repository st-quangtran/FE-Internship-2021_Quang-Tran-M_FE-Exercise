class ListProduct {
  constructor(n, list) {
    this.n = n;
    this.listProduct = list;
  }
  getList() {
    return this.listProduct;
  }
  addProduct(product) {
    this.n++;
    this.listProduct.push(product);
  }
}
export { ListProduct };
