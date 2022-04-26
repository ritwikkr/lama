import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid gray;
  border-radius: 5px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
  width: 400px;
  padding: 0 20px;
  > .heading {
    > p {
      font-size: 32px;
    }
  }
  > .body {
    margin-bottom: 80px;
    .subtotal,
    .shipping,
    .discount,
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .total {
      font-weight: 600;
      font-size: 20px;
    }
    .checkout-btn {
      > button {
        width: 120px;
        height: 30px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
