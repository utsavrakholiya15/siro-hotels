import React from "react";
import "./travel.scss";
import travelImg from "../../../assets/IMAGEs/home-travel.webp";
export default function Travel() {
  return (
    <div className="travel">
      <div className="travel-img">
        <img className="img-full" src={travelImg} alt="travel-image" />
      </div>
      <div className="black-blur"></div>
      <div className="travel-text">
        <span>SIRO Journal</span>
        <h2>Travel hacks by Jeremy Jauncey</h2>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
