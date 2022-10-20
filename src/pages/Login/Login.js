import React from "react";
import "./Login.css";
import LoginPicture from "../../assets/login.png";
import Logo from "../../assets/places/Logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="">
          <div className="d-flex align-items-center position-absolute top-0 start-0">
            <div>
              <img className="img-fluid" src={Logo} alt="" />
            </div>
            <div>
              <h5 className="text-center">Hotel Serena</h5>
            </div>
          </div>
          <div className="login-main">
            <h3>Sign In</h3>
            <p>
              <small>If you don't have an account register</small>
            </p>
            <p>
              <small>
                You can{" "}
                <Link
                  to="/register"
                  className="text-danger text-decoration-none fw-bold"
                >
                  Register here !
                </Link>{" "}
              </small>
            </p>
            <form>
              <small>Email:</small>
              <br />
              <input
                className="input-login"
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
              />
              <br />
              <br />
              <small>Password:</small>
              <br />
              <input
                className="input-login"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <p className="mt-2"></p>
            </form>
            <div className="d-flex justify-content-between">
              <div>
                <input type="checkbox" /> <small>Remember Me</small>
              </div>
              <div>
                <Link
                  to="/forgotPassword"
                  className="text-decoration-none text-black"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <button className="login-button">Login</button>
            </div>
            <p className="mt-4 text-center">Or continue With</p>
            <div className="d-flex justify-content-center">
              <div>
                <Link className="fs-3 me-3">
                  <FcGoogle />
                </Link>
                <Link className="fs-3 me-3 text-primary">
                  <FaTwitter />
                </Link>
                <Link className="fs-3 me-3">
                  <FaFacebook />
                </Link>
                <Link className="fs-3 me-3 text-info">
                  <FaWhatsapp />
                </Link>
                <Link className="fs-3 text-black">
                  <AiFillApple />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="image-login">
          <img className="" src={LoginPicture} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
