import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    li {
      font-size: 15px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 10px;

      .name-product {
        color: #222;
        font-size: 16px;
        margin-top: 10px;
        max-width: 250px;
        text-align: center;
      }

      .price-product {
        font-size: 18px;
        margin-top: 5px;
        font-weight: bold;
      }

      a {
        display: block;
        margin-top: 5px;
      }
    }
  }
`;
