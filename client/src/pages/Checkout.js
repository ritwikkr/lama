import React from "react";
import Footer from "../components/Footer";
import Wrapper from "../assets/wrapper/Checkout";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Item from "../components/Item";
import CheckoutBox from "../components/CheckoutBox";
import Newsletter from "../components/Newsletter";

function Checkout() {
  return (
    <Wrapper>
      <Navbar />
      <Announcement />
      <div className="checkoutDashboard">
        <div className="heading">
          <h1>your bag</h1>
        </div>
        <div className="bags">
          <button>continue shopping</button>
          <div className="bagsList">
            <p className="items">Shopping Bag(2)</p>
            <p className="wishList">Your Wishlist (0)</p>
          </div>
          <button className="checkout">checkout now</button>
        </div>
        <div className="checkout-items">
          <div className="items">
            <Item />
            <Item />
          </div>
          <div className="checkoutBox">
            <CheckoutBox />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Wrapper>
  );
}

export default Checkout;
