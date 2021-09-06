import { CartData } from '../Hooks/useCart';

export default function getTotalCart(cart: CartData[]):number {
  let total = 0;
  cart.forEach((product) => {
    total += Number(product.price) * Number(product.quantityCart);
  });

  return total;
}
