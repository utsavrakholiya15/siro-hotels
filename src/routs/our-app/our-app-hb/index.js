import React from "react";
import "./our-app-hb.scss";
import ourAppHbImg from '../../../assets/IMAGEs/Our App-Hero Banner.webp';
import downArrow from "../../../assets/ICONs/downArrowAnim.svg";
export default function OurAppHb() {
  const handleScroll = () => {
    const scrollHeight = window.innerHeight * 0.84; 
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="our-app-hb">
      <div className="our-app-hb-img">
        <img src={ourAppHbImg} alt="journal-image" />
      </div>
      <div className="black-blur"></div>
      <div className="our-app-hb-text">
        <span>COMING SOON</span>
        <h2>The Journal</h2>
        <p>
          The ultimate destination for SIRO's latest news and exclusive content.
        </p>
      </div>
      <div className="down-arrow" onClick={handleScroll}>
        <div className="white-line-parent">
          <div className="white-line-child line1"></div>
        </div>
        <img className="img-full" src={downArrow} alt="journal-image" />
      </div>
    </div>
  );
}
