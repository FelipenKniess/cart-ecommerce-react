import { CartData } from '../Hooks/useCart';

export default function getQuantityCart(cart: CartData[]):number {
  let total = 0;
  cart.forEach((product) => {
    total += Number(product.quantityCart);
  });

  return total;
}
