import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/images/Logo.png';
import { useCart } from '../../hooks/useCart';
import FormatValue from '../../utils/formatValue';
import GetTotalCart from '../../utils/getTotalCart';

const Header:React.FC = () => {
  const { cart } = useCart();

  const totalCart = GetTotalCart(cart);

  return (
    <Container>
      <img src={Logo} className="logo" alt="NexFar" />

      <div className="info-header">
        <div className="cart">
          <span className="title">NexFar</span>
          <Link to="/carrinho" className="price-cart">
            <FiShoppingCart size={22} color="#3cba92" />
            <span>{FormatValue(totalCart)}</span>
          </Link>
          <span className="min-order">Pedido mínimo: R$150,00</span>
        </div>

        <div className="user">
          F
        </div>
      </div>
    </Container>
  );
};

export default Header;
