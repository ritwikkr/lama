import React from "react";
import Wrapper from "../assets/wrapper/Item";

function Item() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <div className="prod-img">
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16865186/2022/1/18/76812895-9fc6-40ba-a51b-e12cf8cd506f1642505509538SportsShoes1.jpg"
              alt=""
            />
          </div>
          <div className="prod-desc">
            <p className="product">
              <span>Product:</span> jessie thunder shoes
            </p>
            <p className="id">
              <span>ID:</span> 9470583245
            </p>
            <div className="color"></div>
            <p className="size">
              <span>Size:</span> 37.5
            </p>
          </div>
        </div>
        <div className="col col2">
          <div className="change-quantity">
            <button>-</button>
            <input type="number" step="1" placeholder="1" />
            <button>+</button>
          </div>
          <div className="price">
            <p>$ 30</p>
          </div>
        </div>
      </div>
      <hr />
    </Wrapper>
  );
}

export default Item;
