import styled from "styled-components";

const Wrapper = styled.div`
  .details-board {
    border: 2px solid red;
    display: flex;
    .image {
      border: 2px solid blue;
      padding: 20px;
      > img {
        width: 400px;
      }
    }
    .product-details {
      margin-top: 20px;
      margin-left: 40px;
      > p {
        margin-top: 20px;
        width: 700px;
      }
      .price {
        font-size: 48px;
        margin-bottom: 20px;
      }
      .row {
        display: flex;
        align-items: center;
        margin-top: 30px;
        .color {
          margin-right: 50px;
        }
        .quantity {
          border: 2px solid red;
          > button {
            background-color: transparent;
            width: 20px;
            font-size: 32px;
            font-weight: 500;
            border: none;
            cursor: pointer;
          }
          > input {
            border-radius: 10px;
            border: 2px solid skyblue;
            padding-left: 14px;
            width: 40px;
            font-size: 32px;
            outline: none;
          }
        }
        .add-to-cart {
          margin-left: 50px;
          > button {
            cursor: pointer;
            height: 40px;
            border: 3px solid skyblue;
            background-color: transparent;
            text-transform: uppercase;
            width: 150px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export default Wrapper;
