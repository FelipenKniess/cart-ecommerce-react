import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { toast } from 'react-toastify';
import BoxInfo from '../../Components/BoxInfo';
import { useCart, CartData } from '../../Hooks/useCart';
import formatValue from '../../Utils/formatValue';
import getTotalCart from '../../Utils/getTotalCart';
import { Container } from './styles';

const useStyles = makeStyles({
  table: {
    height: '100%',
  },
});

const CheckoutCart:React.FC = () => {
  const {
    cart, addProduct, removeQtdItemCart, cleanCart,
  } = useCart();
  const classes = useStyles();
  const history = useHistory();

  const handleAddProduct = (product: CartData) => {
    addProduct(product);
  };

  const handleRemoveProduct = (product: CartData) => {
    removeQtdItemCart(product);
  };

  const handleCleanCart = () => {
    cleanCart();
    toast.info('Carrinho limpado!');
  };

  const handleFinishRequest = () => {
    toast.success('Pedido Finalizado');
    cleanCart();
    history.push('/');
  };

  return (
    <Container>
      <div className="topo-checkout">
        <Link className="back-home" to="/">
          <ArrowBackIcon />
          Voltar para home
        </Link>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleCleanCart}
        >
          Limpar Carrinho
        </Button>
      </div>

      <h1>Listagem de produtos no carrinho</h1>
      <div className="content">
        <TableContainer className={classes.table} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Quantidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell component="th" align="center" scope="row">
                    {product.price}
                  </TableCell>
                  <TableCell component="th" align="center" scope="row">
                    <MdAddCircle size={18} onClick={() => handleAddProduct(product)} />
                    <span>
                      {product.quantityCart}
                    </span>
                    <MdRemoveCircle size={18} onClick={() => handleRemoveProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {cart.length > 0 && (
          <div className="info-cart">
            <div className="total-values">
              <BoxInfo title="Valores">
                <div className="values">
                  <span>
                    Total
                    <br />
                    (sem impostos)
                    <br />
                    <strong>{formatValue(getTotalCart(cart))}</strong>
                  </span>

                  <span>
                    Imposto
                    <br />
                    <strong>{formatValue(10)}</strong>
                  </span>
                </div>

                <span className="total">
                  Total:
                  <br />
                  <strong>{formatValue(getTotalCart(cart) + 10)}</strong>
                </span>
              </BoxInfo>
            </div>

            <Button variant="contained" onClick={handleFinishRequest} size="large">
              Finalizar Pedido
            </Button>
          </div>
        )}

      </div>
    </Container>
  );
};

export default CheckoutCart;
