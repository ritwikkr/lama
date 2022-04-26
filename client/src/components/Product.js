import React from "react";
import Wrapper from "../assets/wrapper/Product";

function Product({ item }) {
  return (
    <Wrapper>
      <div className="card" key={item.id}>
        <div className="circle"></div>
        <div className="image">
          <img src={item.img} alt="" />
          <div className="imageInfo">
            <div className="icons">
              <div className="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="likes">
                <i class="fa-solid fa-heart"></i>
              </div>
            </div>
            {/* <h1>Rishu</h1> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Product;
