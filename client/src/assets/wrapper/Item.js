import styled from "styled-components";

const Wrapper = styled.div`
  width: 70vw;
  margin-bottom: 30px;
  > .row {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    > .col {
      display: flex;
      .prod-img {
        width: 150px;
        margin-right: 10px;
        > img {
          height: 100%;
          width: 100%;
        }
      }
      .prod-desc {
        > p {
          margin-bottom: 10px;
          > span {
            font-weight: 600;
            margin-right: 5px;
          }
        }
      }
      .change-quantity {
        > button {
          width: 30px;
          height: 30px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
        }
        > input {
          width: 30px;
          margin: 0 10px;
          height: 30px;
          border: none;
          outline: none;
          font-weight: 600;
          font-size: 22px;
          padding-left: 15px;
        }
      }
      > .price {
        text-align: center;
        margin-top: 30px;
        > p {
          font-size: 25px;
        }
      }
    }
    .col2 {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
