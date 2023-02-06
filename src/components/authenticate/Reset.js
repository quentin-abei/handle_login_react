import React from "react";
import reset from "../../assets/forgot.svg";
import { AiOutlineClose } from "react-icons/ai";

const Reset = ({ onLogin }) => {
  return (
    <div className="main-container --flex-center">
      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Reset password</h2>
          <input type="email" className="--width-100" placeholder="Email" />

          <button
            className="--btn --btn-primary
          --btn-block"
          >
            Reset password
          </button>
          <span className="--text-sm --block --text-center">
            We will send you a reset link
          </span>
          <div className="close" onClick={onLogin}>
            <AiOutlineClose />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={reset} alt="loginImage" />
      </div>
    </div>
  );
};

export default Reset;
