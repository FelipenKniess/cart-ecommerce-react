import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useCart } from '../../Hooks/useCart';
import formatValue from '../../Utils/formatValue';
import getTotalCart from '../../Utils/getTotalCart';
import getQuantityCart from '../../Utils/getQuantityCart';
import Logo from '../../Assets/images/Logo-Test.png';

const Header:React.FC = () => {
  const { cart } = useCart();
  return (
    <Container>
      <Link to="/">
        <img src={Logo} className="logo" alt="NexFar" />
      </Link>

      <div className="info-header">

        <Link to="/checkout-cart">
          <div className="cart">
            <span className="total-cart">
              {formatValue(getTotalCart(cart))}
            </span>
            <FiShoppingCart size={30} />
            <span className="quantity-cart">{getQuantityCart(cart)}</span>
          </div>
        </Link>

        <div className="user">
          U
        </div>
      </div>
    </Container>

  );
};
export default Header;
