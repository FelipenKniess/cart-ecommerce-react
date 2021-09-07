import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-left:auto;
  margin-right: auto;
  margin-top: 40px;
  gap: 50px;

  @media(max-width: 520px){
      padding: 10px;
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
    display: flex;
    justify-content:center;
    gap: 15px;

    @media(max-width: 520px){
      flex-direction:column;
    }
    .info-product {
      display:flex;
      flex-direction: column;
      gap: 20px;
      h1 {
        color: #000;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 18px;

        @media(max-width: 520px){
          font-size: 14px;
        }
      }

      .price {
        display:flex;
        flex-direction: column;
        font-size: 1.125em;
        font-weight: bold;
        color: #5eac14;
        span + span {
          font-size: 14px;
          font-weight: 100;
          color: #666;
        }
      }

      p {
        font-size: 16px;
        text-align: justify;
        line-height: 18px;
        color: #4c4c4c;

        @media(max-width: 520px){
          font-size: 14px;
        }
      }

      .buy {
        button {
          background: #559617;
          color: #FFF;
        }
      }
    }
  }
`;
