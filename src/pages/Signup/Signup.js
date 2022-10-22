import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SignupPicture from "../../assets/signup.png";
import Logo from "../../assets/places/Logo.png";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { AuthContext } from "../../Hooks/UserContext";

const Signup = () => {
  const { createUser, verifyEmail, updateName } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,email,password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();

        updateName(name)
          .then((result) => {

            verifyEmail()
              .then((result) => {})

              .catch((error) => {
                console.error(error.message);
              });

          })
          .catch((error) => {

            console.error(error.message);

          });
      })
      .catch((error) => {

        console.error(error.message);
        
      });
  };
  return (
    <>
      <div className="login-container">
        <div className="">
          <div className="d-flex align-items-center position-absolute top-0 start-0">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <h5>Hotel Serena</h5>
            </div>
          </div>
          <div className="login-main">
            <h3> Sign Up</h3>
            <p>
              <small>If you don't have an account register</small>
            </p>
            <p>
              <small>
                You can{" "}
                <Link
                  to="/login"
                  className="text-danger text-decoration-none fw-bold"
                >
                  Login here !
                </Link>{" "}
              </small>
            </p>
            <form onSubmit={handleSubmit}>
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
              <small>Name:</small>
              <br />
              <input
                className="input-login"
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
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
              <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="login-button">
                  Register
                </button>
              </div>
            </form>

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
          <img className="" src={SignupPicture} alt="" />
        </div>
      </div>
    </>
  );
};

export default Signup;
