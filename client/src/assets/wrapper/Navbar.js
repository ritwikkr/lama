import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  .row {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search {
      flex: 1;
      display: flex;
      align-items: center;
      .language {
        font-weight: 600;
        margin-right: 15px;
      }
      .search-box {
        border: 2px solid gray;
        height: 30px;
        display: flex;
        align-items: center;
        > input {
          border: none;
          outline: none;
          padding-left: 10px;
          font-weight: 600;
        }
        > i {
          margin-right: 5px;
          color: gray;
        }
      }
    }
    .logo {
      flex: 1;
      text-align: center;
      > p {
        font-size: 36px;
        font-weight: 700;
      }
    }
    .menu {
      height: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > p {
        margin-right: 25px;
        font-weight: 600;
        cursor: pointer;
      }
      .basket {
        cursor: pointer;
        width: 45px;
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;
        > i {
          font-size: 25px;
        }
        .badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: blue;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export default Wrapper;
