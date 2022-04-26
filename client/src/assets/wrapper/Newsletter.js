import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fdf5f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  > h1 {
    font-size: 66px;
    margin-bottom: 20px;
  }
  > p {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .mail-box {
    height: 50px;
    border: 2px solid gray;
    width: 500px;
    form {
      /* border: 2px solid red; */
      display: flex;
      justify-content: space-between;
      > input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 22px;
        padding-left: 10px;
        height: 46px;
      }
      .send-icon {
        cursor: pointer;
        background-color: #036162;
        color: white;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
      }
    }
  }
`;

export default Wrapper;
