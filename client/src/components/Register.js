import React, { useState } from "react";
import Wrapper from "../assets/wrapper/Register";

function Register() {
  const [showRegister, setShowRegister] = useState(false);
  function formSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <Wrapper>
      <div className="background">
        <form onSubmit={formSubmitHandler}>
          <h2>{showRegister ? `REGISTER` : `SIGN IN`}</h2>
          {showRegister && <input type="text" placeholder="name" />}
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>LOGIN</button>
          <p className="forgot-password">password forgotten?</p>
          <p
            className="register"
            onClick={() => setShowRegister(!showRegister)}
          >
            {showRegister ? `already logged in?` : `create a new account`}
          </p>
        </form>
      </div>
    </Wrapper>
  );
}

export default Register;
