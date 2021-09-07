import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Product from './Pages/Product';
import CheckoutCart from './Pages/CheckoutCart';

const Routes:React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/product/:id" component={Product} />
    <Route path="/checkout-cart" component={CheckoutCart} />
  </Switch>
);

export default Routes;
