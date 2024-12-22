import React from "react";
import "./journal-hb.scss";
import journalHb from "../../../assets/IMAGEs/journalhb.webp";
import downArrow from "../../../assets/ICONs/downArrowAnim.svg";

export default function JournalHb() {
  const handleScroll = () => {
    const scrollHeight = window.innerHeight * 0.84; // Calculate 84vh
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="journal-hb">
      <div className="journal-hb-img">
        <img src={journalHb} alt="journal-image" />
      </div>
      <div className="black-blur"></div>
      <div className="journal-hb-text">
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
