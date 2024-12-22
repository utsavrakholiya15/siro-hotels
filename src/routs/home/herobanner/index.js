import React from "react";
import "./herobanner.scss";
import downArrow from "../../../assets/ICONs/downArrowAnim.svg";
import hbVideo from "../../../assets/VIDEOs/hb-video.mp4";
export default function Herobanner() {
  const handleScroll = () => {
    const scrollHeight = window.innerHeight * 0.84; // Calculate 84vh
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="hb">
      <div className="hb-video">
        <video autoPlay muted loop src={hbVideo}></video>
      </div>
      <div className="black-blur"></div>
      <div className="hb-text">
        <span>SIRO ONE ZA'ABEEL</span>
        <h2>The ultimate active lifestyle + business hotel</h2>
        <p>
          Stay in the heart of Dubai, steps away from Dubai World Trade Centre.
        </p>
        <button>EXPLORE</button>
      </div>
      <div className="down-arrow" onClick={handleScroll}>
        <div className="white-line-parent">
          <div className="white-line-child line1"></div>
        </div>
        <img className="img-full" src={downArrow} alt="down" />
      </div>
    </div>
  );
}
