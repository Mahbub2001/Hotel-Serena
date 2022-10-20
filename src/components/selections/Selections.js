import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Selection.css";
import SelectionCards from "./SelectionCards";
const Selections = () => {
  const [places,setPlaces] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/places')
    .then(res=>res.json())
    .then(data=>setPlaces(data))
  },[])
  return (
    <div className="mt-5">
      <h3 className="fw-bold">The very best of our Selections</h3>
      <div className="d-flex justify-content-between">
        <div>
          <p>Take a look at the best places in the Work</p>
        </div>
        <div className="see-all-div-1">
          <Link className="see-all"> See All</Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <div className="seller-selections ">
        {
          places.map(place=> <SelectionCards place={place} key={place.id}></SelectionCards>)
        }
      </div>
      </div>
      <div className="see-all-div-2">
        <Link className="see-all"> See All</Link>
      </div>
    </div>
  );
};

export default Selections;
