import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Products from '../../Utils/products.json';
import { CartData } from '../../Hooks/useCart';
import getFormatValue from '../../Utils/formatValue';

export interface ProductData {
  id: number;
  name: string,
  price: string,
  urlPhotoMedium: string,
  urlPhotoLarge: string
}

const LandingPage = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <Container>
      <div className="showcase">
        <ul>
          {products.map((product) => {
            const linkProduct = `product/${product.id}`;

            return (
              <li key={product.id}>
                <img src={product.urlPhotoMedium} alt={product.name} />
                <span className="name-product">{product.name}</span>
                <span className="price-product">
                  {getFormatValue(parseFloat(product.price))}
                </span>
                <Link to={linkProduct}>
                  <Button variant="contained" color="primary">
                    Ver Produto
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default LandingPage;
