import React from "react";
import Wrapper from "../assets/wrapper/CheckoutBox";

function CheckoutBox() {
  return (
    <Wrapper>
      <div className="heading">
        <p>order summary</p>
      </div>
      <div className="body">
        <div className="subtotal">
          <p>Subtotal</p>
          <p className="price">$ 80</p>
        </div>
        <div className="shipping">
          <p>Estimated Shipping</p>
          <p className="price">$ 5.90</p>
        </div>
        <div className="discount">
          <p>Shipping Discount</p>
          <p className="price">$ -5.90</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p className="price">$ 80</p>
        </div>
        <div className="checkout-btn">
          <button>checkout now</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default CheckoutBox;
