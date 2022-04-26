import React from "react";
import Wrapper from "../assets/wrapper/Navbar";

function Navbar() {
  return (
    <Wrapper>
      <div className="row">
        <div className="search">
          <div className="language">EN</div>
          <div className="search-box">
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="logo">
          <p>LAMA.</p>
        </div>
        <div className="menu">
          <p>REGISTER</p>
          <p>SIGN IN</p>
          <div className="basket">
            <i class="fa-solid fa-cart-shopping"></i>
            <div className="badge">
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
