interface IProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  avatar: string;
}

type IProductInCart = IProduct & {
  number: number;
}

export { IProduct, IProductInCart };
