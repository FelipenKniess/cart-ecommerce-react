import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-left:auto;
  margin-right: auto;
  margin-top: 40px;
  gap: 50px;

  .topo-checkout {
    display:flex;
    justify-content:space-between;

    @media(max-width: 520px){
      justify-content:space-around;

      button {
        width: 150px;
        height: 40px;
        font-size: 10px;

      }
    }
  }

  h1 {
    font-size: 20px;
    font-weight:bold;

    @media(max-width: 520px){
      text-align:center;
    }
  }
  .back-home {
    display: flex;
    align-items:center;
    gap: 5px;
    font-size: 18px;

    @media(max-width: 520px){
      font-size: 16px;

      svg {
        width: 18px;
      }
    }
    :hover {
      color: #13997E;
    }
  }

  .content {
    display:flex;
    justify-content:space-between;
    gap:30px;

    @media(max-width: 520px){
      flex-direction:column;
    }

    .total-values {
      border: 1px solid #CCC;
      border-radius: 20px;
      padding: 20px;
      .values {
        display: flex;
        text-align: center;

        strong {
          font-weight: bold;
        }

        span + span {
          margin-left: 100px;
        }
      }

      .total {
        text-align: center;
        margin-top: 25px;
        color: #559617;
        font-size: 18px;

        strong {
          font-weight: bold;
        }
      }
    }

    table {
      user-select:none;

      span {
        padding: 7px;
      }
      svg {
        cursor:pointer;
      }
    }

    .info-cart {
      display:flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-top: 15px;
        margin-bottom: 15px;
        background: #559617;
        color: #FFF;
      }
    }
  }

`;
