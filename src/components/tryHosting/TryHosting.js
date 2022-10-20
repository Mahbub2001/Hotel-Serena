import React from "react";
import Hosting from "../../assets/hosting.png";
import "./TryHosting.css";

const TryHosting = () => {
  return (
    <div className="mt-5 position-relative">
        <img className="img-fluid" src={Hosting} alt="" />
      <div className="text text-white">
        <h1 className="">Try Hosting</h1>
        <p>
          Earn extra income and unlock new <br />
          opportunities by sharing your space.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default TryHosting;
