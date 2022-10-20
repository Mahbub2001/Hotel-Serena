import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Client.css";

const Client = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {

      }
    </Carousel>
  );
};

export default Client;
