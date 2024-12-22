import React from "react";
import "./download.scss";
import downloadImg from "../../../assets/IMAGEs/Download Our App-Banner.webp";
export default function Download() {
  return (
    <div className="download">
      <div className="container">
        <div className="download-text">
          <h2>Curate your journey to wellbeing</h2>
          <p>
            The SIRO app is your portal to a seamlessly immersive experience
            across our destinations. Explore rooms, discover destination
            fitness, and personalise your stay with special meal plans, select
            fitness classes and recovery treatments <br /> – all in one place.
          </p>
        </div>
        <div className="download-parent">
          <div className="download-img">
            <img className="img-full" src={downloadImg} alt="destination" />
            <div className="black-blur-dark"></div>
            <div className="download-data-absolute">
              <div className="download-data">
                <h3>Download the SIRO app</h3>
                <p>
                Join the future of fitness + recovery.
                </p>
                <p>COMING SOON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
