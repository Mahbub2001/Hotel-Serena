import React from "react";
import Goa from "../../assets/places/goa.png";
import Himachol from "../../assets/places/himachol.png";
import kerala from "../../assets/places/kerala.png";
import Rajsthan from "../../assets/places/rajsthan.png";
import Uttrakhand from "../../assets/places/uttrarakhand.png";
import "./Destination.css";

const Destination = () => {
  return (
    <div>
      <h3 className="bold">Choose Your destination</h3>
      <p>
        <small>Take a look at the best places in the work</small>
      </p>
      <div className="picture">
        <div className="">
          <img src={Goa} alt="" />
          <p className="text-center">
            <small>Goa</small>
          </p>
        </div>
        <div className="">
          <img src={Himachol} alt="" />
          <p className="text-center">
            <small> Himachal Pradesh</small>
          </p>
        </div>
        <div className="">
          <img src={kerala} alt="" />
          <p className="text-center">
            <small> Kerala</small>
          </p>
        </div>
        <div className="">
          <img src={Rajsthan} alt="" />
          <p className="text-center">
            <small> Rajasthan</small>
          </p>
        </div>
        <div className="">
          <img src={Uttrakhand} alt="" />
          <p className="text-center">
            <small>Uttarakhand</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
