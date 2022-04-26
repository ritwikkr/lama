import React from "react";
import Wrapper from "../assets/wrapper/Footer";
import masterCard from "../assets/img/mastercard.png";
import paypal from "../assets/img/paypal.png";
import visa from "../assets/img/visa.png";

function Footer() {
  return (
    <Wrapper>
      <div className="foot-content">
        <div className="info">
          <h1>LAMA.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            repellat exercitationem recusandae adipisci libero aperiam omnis
            illum ea iure. Possimus quidem quod voluptatum, eligendi assumenda
            doloribus labore dolor itaque cupiditate?
          </p>
          <div className="social-icons">
            <div className="fb">
              <i class="fa-brands fa-facebook-square"></i>
            </div>
            <div className="insta">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="twitter">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="pinterest">
              <i class="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
        <div className="links">
          <h3>Useful Links</h3>
          <div className="row">
            <div className="col">
              <ul>
                <li>Home</li>
                <li>Man Fashion</li>
                <li>Accessories</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Cart</li>
                <li>Woman Fashion</li>
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="address">
            <i class="fa-solid fa-location-dot"></i>
            <p>C-308, Malti Luxuria City, Sector-6, B.S. City</p>
          </div>
          <div className="number">
            <i class="fa-solid fa-phone"></i>
            <p>+1 234 56 789</p>
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <p>ritwik.rishu@trigyn.com</p>
          </div>
          <div className="payment">
            <img src={masterCard} alt="" />
            <img src={paypal} alt="" />
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
