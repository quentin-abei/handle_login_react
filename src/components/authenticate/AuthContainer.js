import React, { useState } from "react";
import Login from "./Login";
import "./AuthContainer.scss";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const [reset, setReset] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setAuth({ login: false, register: true, reset: false });

    // await setLogin(false);
    // setRegister(true);
    // setReset(false);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setAuth({ login: false, register: false, reset: true });

    // setLogin(false);
    // setReset(true);
    // setRegister(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setAuth({ login: true, register: false, reset: false });
    // setReset(false);
    // setRegister(false);
    // setLogin(true);
  };

  // useEffect(() => {
  //    handleLogin();
  // }, [])

  return (
    <section className="--flex-center --100vh --bg-gray">
      <div className="container box">
        {auth.login && (
          <Login onRegister={handleRegister} onReset={handleReset} />
        )}
        {auth.register && <Register onLogin={handleLogin} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
