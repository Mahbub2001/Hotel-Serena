import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../../assets/places/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-class ">
        <div className="footer-box container">
          <div>
            <h5 className="">Buy Roamhome gift cards</h5>
          </div>
          <div className="d-flex gap-5 align-items-center align-content-center">
            <div>
              <p>Let's do it! —</p>
            </div>
            <div>
              <Link>
                <button className="l-class">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container footer-main">
          <div>
            <img className="logo-class" src={Logo} alt="" />
          </div>
          <div className="text-white">
            <h5 className="fw-bold">Resources</h5> <br />
            <Link className="text-decoration-none text-white">
              About us
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">
              Contact us
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">
              Book your room
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">
              Be a Host
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">Career</Link>
          </div>
          <div className="text-white">
            <h5 className="fw-bold">Support</h5> <br />
            <Link className="text-decoration-none text-white">
              Help Center
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">
              Safety Information
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">
              Cancellation{" "}
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">
              Our Covid Response
            </Link>{" "}
            <br />
            <Link className="text-decoration-none text-white">FaQs</Link>
          </div>
          <div className="text-white subscribe-class">
            <div>
              <h5 className="fw-bold">Let's do it</h5> <br />
              <div className=" gap-2 mb-3 social-footer">
                <Link className="text-white fs-4">
                  <FaFacebook />
                </Link>
                <Link className="text-white fs-4">
                  <FaTwitter />
                </Link>
                <Link className="text-white fs-4">
                  <FaFigma />
                </Link>
                <Link className="text-white fs-4">
                  <FaInstagram />
                </Link>
                <Link className="text-white fs-4">
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div>
              <Link className="text-decoration-none text-white fw-bold ">
                Subscribe
              </Link>
              <br />
              <br />
              <small className="">
                Subscribe to stay tuned for new web <br /> design and latest
                updates. Let's do it!{" "}
              </small>
              <form className="d-flex from-footer mt-1">
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>

          {/*  */}
          <div className="small-subscribe">
            <div className="">
              <h5 className="fw-bold">Let's do it</h5> <br />
              <div className="d-flex justify-content-between gap-2 mb-3">
                <Link className="text-white fs-4">
                  <FaFacebook />
                </Link>
                <Link className="text-white fs-4">
                  <FaTwitter />
                </Link>
                <Link className="text-white fs-4">
                  <FaFigma />
                </Link>
                <Link className="text-white fs-4">
                  <FaInstagram />
                </Link>
                <Link className="text-white fs-4">
                  <FaGithub />
                </Link>
              </div>
              <form className="d-flex from-footer mt-1">
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          {/*      */}
        </div>
        <hr className="text-white" />
        <div className="d-flex text-white justify-content-around container">
          <Link className="text-decoration-none text-white">
            Privacy Policy
          </Link>
          <Link className="text-decoration-none text-white">Terms of Uses</Link>
          <Link className="text-decoration-none text-white">
            Sales and Refunds
          </Link>
          <Link className="text-decoration-none text-white">Legal</Link>
          <Link className="text-decoration-none text-white">Site Map</Link>
          <small>© 2021 All Rights Reserved</small>
        </div>
      </div>
    </>
  );
};

export default Footer;
