import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
  .card {
    position: relative;
    display: flex;
    justify-content: center;
    .image {
      cursor: pointer;
      width: 95%;
      height: 80%;
      .darkOverlay {
        position: absolute;
        height: 80%;
        width: 95%;
        background-color: rgba(0, 0, 0, 0.5);
        /* z-index: -1; */
      }
      > img {
        width: 100%;
        height: 100%;
        /* border: 2px solid black; */
        object-fit: contain;
        /* z-index: -2; */
      }
    }
    .title {
      position: absolute;
      height: fit-content;
      /* to center absolute content */
      top: 0;
      bottom: 0;
      margin: auto;
      /*  */
      color: white;
      font-size: 22px;
      text-align: center;
      > h1 {
        text-transform: uppercase;
      }
      > button {
        z-index: 10;
        margin-top: 20px;
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border: none;
      }
    }
  }
`;

export default Wrapper;
