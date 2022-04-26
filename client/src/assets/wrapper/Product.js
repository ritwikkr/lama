import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  .card {
    position: relative;
    .image {
      width: 350px;
      height: 300px;
      margin: 0 0 20px 0;
      position: relative;
      > img {
        height: 100%;
        width: 100%;
        /* object-fit: contain; */
      }
      &:hover .imageInfo {
        display: block;
      }
    }
    .imageInfo {
      transition: all 0.5s ease;
      display: none;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      .icons {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .cart,
        .search,
        .likes {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: white;
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Wrapper;
