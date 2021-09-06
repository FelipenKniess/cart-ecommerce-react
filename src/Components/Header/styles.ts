import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 100px;
  border-bottom: 3px solid #13997E;
  background: #FFF;

  @media(max-width: 520px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
  }

  .logo {
    height: 80px;
    width: 180px;
  }

  .info-header {
    display: flex;
    align-items: center;

    .cart {
      display: flex;
      align-items: center;
      position:relative;
      margin-right: 50px;
      cursor: pointer;

      @media(max-width: 520px){
        margin-right: 0px;
      }
      .total-cart {
        color: #13997E;
        margin-right: 10px;
        font-size: 18px;
      }

      .quantity-cart {
        position: absolute;
        right: -5px;
        top: 0;
        border-radius: 50%;
        text-align: center;
        background: #f62854;
        color: #FFF;
        font-size: 10px;
        width: 15px;
        height: 15px;
        line-height: 15px;
      }

      :hover {
        font-weight: bold;
      }
    }

    .user {
      background: #13997E;
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      text-transform: uppercase;
      color: #FFF;
      font-size: 30px;

      @media(max-width: 520px){
        display: none;
      }
    }
  }

`;
