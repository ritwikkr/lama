import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  .checkoutDashboard {
    .heading {
      text-align: center;
      text-transform: uppercase;
      margin: 20px 0;
      > h1 {
        font-weight: 500;
      }
    }
    .bags {
      border: 2px solid blue;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      > button {
        height: 30px;
        width: 150px;
        cursor: pointer;
        border: 2px solid black;
        background-color: transparent;
        text-transform: uppercase;
      }
      .bagsList {
        display: flex;
        > p {
          margin-right: 20px;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .checkout {
        background-color: black;
        color: white;
        border: none;
      }
    }
    .checkout-items {
      border: 2px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Wrapper;
