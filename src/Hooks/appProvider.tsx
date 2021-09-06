import React, { ReactNode } from 'react';

import { CartProvider } from './useCart';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }:AppProviderProps) => (
  <CartProvider>
    {children}
  </CartProvider>
);

export default AppProvider;
