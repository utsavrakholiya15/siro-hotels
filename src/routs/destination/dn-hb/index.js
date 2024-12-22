import React from "react";
import "./dn-hb.scss";
import dnHbImg from "../../../assets/IMAGEs/dn-hb.webp";
import downArrow from "../../../assets/ICONs/downArrowAnim.svg";
export default function DnHb() {
  const handleScroll = () => {
    const scrollHeight = window.innerHeight * 0.84; // Calculate 84vh
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="dn-hb">
      <div className="dn-hb-img">
        <img src={dnHbImg} alt="destination"/>
      </div>
      <div className="black-blur"></div>
      <div className="dn-hb-text">
        <h2>Our destinations</h2>
        <p>
          Located between cityscapes, coastlines and mountainous landscapes,
          SIRO hotels empower you to unlock your potential, no matter where you
          are.
        </p>
      </div>
      <div className="down-arrow" onClick={handleScroll}>
        <div className="white-line-parent">
          <div className="white-line-child line1"></div>
        </div>
        <img className="img-full" src={downArrow}alt="down" />
      </div>
    </div>
  );
}
