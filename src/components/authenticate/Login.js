import React from "react";
import login from "../../assets/login.svg";

const Login = ({ onRegister, onReset }) => {
  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={login} alt="loginImage" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Login</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input
            type="password"
            className="--width-100"
            placeholder="Password"
          />
          <button
            className="--btn --btn-primary
          --btn-block"
          >
            Login
          </button>

          <a href="/" rel="noreferrer" onClick={onReset} className="--text-sm">
            Reset Password:
          </a>

          <span className="--text-sm --block">
            Don't have an account ?
            <a href="/" rel="noreferrer" onClick={onRegister}className="--text-sm">
              Register
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
