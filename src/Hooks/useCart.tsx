import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';

import { toast } from 'react-toastify';

export interface CartData {
  id: Number;
  name: String,
  price: String,
  quantityCart?: Number;
}

interface CartContextData {
  cart: CartData[];
  addProduct: (Product: CartData) => void;
  removeProduct: (Product: CartData) => void;
  removeQtdItemCart: (Product: CartData) => void;
  cleanCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider:React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartData[]>(() => {
    const storagedCart = localStorage.getItem('@teste:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = (Product: CartData) => {
    const productAlreadyInCart = cart.find((item) => item.id === Product.id);

    if (!productAlreadyInCart) {
      localStorage.setItem('@teste:cart', JSON.stringify([...cart, { ...Product, quantityCart: 1 }]));
      setCart([...cart, { ...Product, quantityCart: 1 }]);
      toast.success('Produto adicionado no carrinho!');
      return;
    }

    if (productAlreadyInCart) {
      const updatedCart = cart.map((cartItem) => (cartItem.id === Product.id ? {
        ...cartItem,
        quantityCart: Number(cartItem.quantityCart) + 1,
      } : cartItem));

      setCart(updatedCart);
      localStorage.setItem('@teste:cart', JSON.stringify(updatedCart));
      toast.success('Alterado quantidade do produto no carrinho!');
    }
  };

  const removeProduct = (Product: CartData) => {
    const productExists = cart.some((cartProduct) => cartProduct.id === Product.id);
    if (!productExists) {
      toast.error('Esse produto não está no carrinho!');
      return;
    }

    const updatedCart = cart.filter((cartItem) => cartItem.id !== Product.id);
    setCart(updatedCart);
    localStorage.setItem('@teste:cart', JSON.stringify(updatedCart));

    toast.error('Removido produto do carrinho!');
  };

  const removeQtdItemCart = (Product:CartData) => {
    const productExistInCart = cart.find((item) => item.id === Product.id);

    if (!productExistInCart) {
      toast('Produto não está adicionado no carrinho!');
      return;
    }

    if (productExistInCart.quantityCart === 1) {
      removeProduct(Product);
      return;
    }

    const updatedCart = cart.map((cartItem) => (cartItem.id === Product.id ? {
      ...cartItem,
      quantityCart: Number(cartItem.quantityCart) - 1,
    } : cartItem));

    setCart(updatedCart);
    localStorage.setItem('@teste:cart', JSON.stringify(updatedCart));
    toast.error('Alterado quantidade do produto no carrinho!');
  };

  const cleanCart = () => {
    localStorage.removeItem('@teste:cart');
    setCart([]);
    toast.info('Carrinho limpado!');
  };

  return (
    <CartContext.Provider value={{
      cart, addProduct, removeProduct, removeQtdItemCart, cleanCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
