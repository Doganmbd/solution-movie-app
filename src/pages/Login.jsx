import React, { useState } from "react";
import {forgotPassword, signIn, signUpProvider } from "../auth/firebase";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email,password,navigate)
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate)
  }

  return (
    <div className="d-flex justify-content-center">
      {/* //! d-none d-md-block small da resim gözükmesin md ve üstünde gözüksün */}
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="register" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="link" onClick={() => forgotPassword(email)}>Forgot Password?</div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
        <button className="btn btn-primary form-control"onClick={handleProviderLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
