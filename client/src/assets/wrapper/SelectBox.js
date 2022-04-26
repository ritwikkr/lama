import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  > label {
    font-weight: 600;
    font-size: 20px;
  }
  > select {
    border: 2px solid blue;
    height: 40px;
    margin-left: 20px;
  }
`;

export default Wrapper;
