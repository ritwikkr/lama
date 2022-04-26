import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 100vh;
  background-color: #027c7e;
  .background {
    > form {
      padding: 20px;
      width: 450px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: white;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      > h2 {
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: 500;
      }
      > input {
        margin-bottom: 10px;
        height: 40px;
        font-size: 20px;
        border: 2px solid black;
        border-radius: 3px;
        padding-left: 10px;
      }
      > button {
        width: 150px;
        height: 50px;
        border: none;
        background-color: #027c7e;
        color: white;
        font-size: 22px;
        cursor: pointer;
      }
      .forgot-password {
        text-decoration: underline;
        text-transform: uppercase;
        font-size: 15px;
        margin: 20px 0;
        cursor: pointer;
      }
      .register {
        text-decoration: underline;
        text-transform: uppercase;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
