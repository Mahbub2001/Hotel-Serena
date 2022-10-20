import React from "react";
import HeaderPic from "../../assets/headers/Rectangle 3.png";
import HeaderShadow from "../../assets/headers/Rectangle 5.png";
import Client from "../../components/client/Client";
import Destination from "../../components/Destination/Destination";
import Selections from "../../components/selections/Selections";
import TryHosting from "../../components/tryHosting/TryHosting";

const Home = () => {
  return (
    <div className="">
      <div className="row position-relative mb-5">
        <div className="col-sm-12 col-lg-6">
          <h3 className="fw-bold mt-5">Vacation Rentals in India</h3>
          <p>Find and book unique accommodation on Rentals</p>
          <div className="mt-3 border row rounded-5">
            <div className="col-sm-12 col-lg-4">
              <div className="mx-1 pt-2">
                <span>Location</span>
                <p>Where are you going</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="pt-2">
                <span>Check-In Check-Out</span>
                <p>Add Dates</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 shadow-lg rounded-5">
              <div className="pt-2 d-flex justify-content-between align-items-center">
                <div>
                  <span>Guests</span>
                  <p>Add Guests</p>
                </div>
                <div>
                  <button className="btn btn-danger rounded-5 fw-bold">Search</button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4">Categories: Pet Friendly, Corporate Events, Family Vacation, Romantic Getaways</p>
        </div>
        <div className="col">
          <img className="img-fluid" src={HeaderPic} alt="" />
        </div>
        <img  className="img-fluid w-25 position-absolute bottom-0" src={HeaderShadow} alt="" />
      </div>
      <Destination/>
      <TryHosting/>
      <Selections/>
      <Client/>
    </div>
  );
};

export default Home;
