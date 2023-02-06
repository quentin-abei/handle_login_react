import React from "react";
import registerImg from "../../assets/register.svg";

const Register = ({ onLogin }) => {
  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />
          <input
            type="password"
            className="--width-100"
            placeholder="Password"
          />
          <button
            className="--btn --btn-primary
          --btn-block"
          >
            Register
          </button>
          <span className="--text-sm --block">
            Already have an account ?
            <a onClick={onLogin}  href="/" className="--text-sm">
              Login
            </a>
          </span>
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="loginImage" />
      </div>
    </div>
  );
};

export default Register;
