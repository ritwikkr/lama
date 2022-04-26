import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 90px);
  .arrows {
    width: 100%;
    display: flex;
    position: absolute;
    .arrow {
      position: absolute;
      background-color: white;
      height: 50px;
      margin-top: 18%;
      width: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0.5;
    }
    .arrow-left {
      left: 20px;
    }
    .arrow-right {
      right: 20px;
    }
  }
  .slides {
    /* overflow-x: scroll; */
    /* display: flex;
    justify-content: space-between; */
    .slide {
      width: 100vw;
      flex: 1;
      border: 2px solid blue;
      display: flex;
      align-items: center;
      padding: 20px;
      margin-left: 200px;
      .img {
        border: 2px solid red;
        height: 550px;
        > img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
      .description {
        margin-left: 50px;
        > h1 {
          font-size: 64px;
          margin-bottom: 20px;
        }
        > p {
          font-size: 24px;
          margin-bottom: 50px;
        }
        > button {
          cursor: pointer;
          height: 40px;
          width: 150px;
          background-color: transparent;
          border: 3px solid black;
          font-weight: 600;
        }
      }
    }
  }
`;

export default Wrapper;
