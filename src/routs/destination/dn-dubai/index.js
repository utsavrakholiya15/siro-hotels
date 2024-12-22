import React from "react";
import "./dn-dubai.scss";
import dnDubaiImg from "../../../assets/IMAGEs/dn-dubai.webp";
export default function DnDubai() {
  return (
    <div className="container">
      <div className="dn-dubai">
        <div className="dn-dubai-img">
          <img className="img-full" src={dnDubaiImg} alt="destination" />
          <div className="black-blur-dark"></div>
          <div className="dn-dubai-data-absolute">
            <div className="dn-dubai-data">
              <h3>SIRO One Za’abeel, Dubai</h3>
              <p>
                Dubai's ultimate business and active lifestyle hotel. Now open.
              </p>
              <button>DISCOVER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
