import LoginPicture from "../../assets/login.png";
import Logo from "../../assets/places/Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Hooks/UserContext";

const ForgetPassword = () => {

  const {resetPassword} = useContext(AuthContext);

  const handleForgetPassword = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    resetPassword(email)
    .then(result=>{
      alert('An email send in your email please check')
    })
    .catch(error=>{

    })
  }

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
            <h3>Give Your Email</h3>
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
            <form onSubmit={handleForgetPassword}>
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
              <div className="d-flex justify-content-between">
                <div></div>
                <div>
                  <Link
                    to="/login"
                    className="text-decoration-none text-info fw-bold"
                  >
                    Back To Login
                  </Link>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="login-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="image-login">
          <img className="" src={LoginPicture} alt="" />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
