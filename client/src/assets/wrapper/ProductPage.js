import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid blue;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;
  > h1 {
    margin-bottom: 30px;
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .filter {
      display: flex;
      > select {
        margin-left: 10px;
        width: 60px;
        border: 2px solid gray;
        outline: none;
      }
    }
    .sortProducts {
    }
  }
  .showCase {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default Wrapper;
