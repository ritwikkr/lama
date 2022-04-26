import React from "react";
import Wrapper from "../assets/wrapper/Newsletter";

function Newsletter() {
  return (
    <Wrapper>
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products</p>
      <div className="mail-box">
        <form>
          <input type="email" placeholder="Your email" />
          <div className="send-icon">
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default Newsletter;
