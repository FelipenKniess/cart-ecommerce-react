import React, { useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Container } from './styles';
import { ProductData } from '../LandingPage';
import Products from '../../Utils/products.json';
import formatValue from '../../Utils/formatValue';
import { useCart } from '../../Hooks/useCart';
import Fade from '../../Components/FadeModal';

interface ProductParams {
  id: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    gap: '10px',
  },
}));

const Product = () => {
  const { params } = useRouteMatch<ProductParams>();
  const [product, setProduct] = useState<ProductData>();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const { addProduct } = useCart();

  useEffect(() => {
    const productId = parseFloat(params.id);
    const findProduct = Products.find((item) => item.id === productId);

    setProduct(findProduct);
  }, [params.id]);

  const handleAddProductCart = useCallback(() => {
    if (product) {
      addProduct(product);
      setOpen(true);
    }
  }, [addProduct, product]);

  const handleClickGoToCart = () => {
    history.push('/checkout-cart');
  };

  const handleClickKeepBuying = () => {
    history.push('/');
  };

  return (
    <Container>
      {product ? (
        <>
          <Link className="back-home" to="/">
            <ArrowBackIcon />
            Voltar para home
          </Link>
          <div className="content">
            <img src={product.urlPhotoLarge} alt={product.name} />
            <div className="info-product">
              <h1>{product.name}</h1>
              <div className="price">
                <span>{formatValue(parseFloat(product.price))}</span>
                <span>no boleto com desconto</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi,
                iure nulla, cum aperiam numquam aliquam illum rerum quod unde voluptatum similique
                incidunt architecto. Eaque quas aperiam repellat? Quaerat, at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi,
                iure nulla, cum aperiam numquam aliquam illum rerum quod unde voluptatum similique
                incidunt architecto. Eaque quas aperiam repellat? Quaerat, at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi,
                iure nulla, cum aperiam numquam aliquam illum rerum quod unde voluptatum similique
                incidunt architecto. Eaque quas aperiam repellat? Quaerat, at!
              </p>

              <div className="buy">
                <Button onClick={handleAddProductCart} variant="contained" size="large" startIcon={<AddShoppingCartIcon />}>
                  Comprar Produto
                </Button>
              </div>

            </div>
          </div>

          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="spring-modal-title">Produto Adicionado no carrinho!</h2>
                <Button variant="contained" color="primary" onClick={handleClickKeepBuying} size="small">
                  Continuar Comprando
                </Button>
                <Button variant="contained" onClick={handleClickGoToCart} size="small">
                  Ir para o Carrinho
                </Button>
              </div>
            </Fade>
          </Modal>
        </>
      ) : (
        <h1>Produto não encontrado</h1>
      )}
    </Container>
  );
};

export default Product;
