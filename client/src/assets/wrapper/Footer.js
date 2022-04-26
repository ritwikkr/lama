import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  .foot-content {
    display: flex;
    padding: 20px;
    .info {
      flex: 1;
      > p {
        margin-top: 30px;
        width: 400px;
        font-weight: 600;
        line-height: 20px;
      }
      .social-icons {
        display: flex;
        justify-content: space-between;
        width: 250px;
        margin-top: 20px;
        .fb,
        .insta,
        .twitter,
        .pinterest {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
        }
        .fb {
          background-color: #3b5998;
        }
        .insta {
          background-color: #8a3ab9;
        }
        .twitter {
          background-color: #00acee;
        }
        .pinterest {
          background-color: #c8232c;
        }
      }
    }
    .links {
      flex: 1;
      > h3 {
        margin-bottom: 30px;
      }
      .row {
        display: flex;
        .col {
          margin-right: 50px;
          > ul {
            list-style: none;
            > li {
              margin: 10px 0;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }
    }
    .contact {
      flex: 1;
      > h3 {
        margin-bottom: 30px;
      }
      .address,
      .number,
      .email {
        margin: 20px 0;
        display: flex;
        align-items: center;
        > i {
          margin-right: 10px;
        }
      }
      .payment {
        > img {
          width: 40px;
          object-fit: contain;
          margin: 0 10px;
        }
      }
    }
  }
`;

export default Wrapper;
