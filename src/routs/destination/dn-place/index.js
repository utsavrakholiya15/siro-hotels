import React from "react";
import './dn-place.scss';
import dnPlaceImg from '../../../assets/IMAGEs/dn-place.webp';
export default function DnPlace() {
  return (
    <div className="container">
      <div className="dn-place">
        <div className="dn-place-img">
          <img className="img-full" src={dnPlaceImg} alt="destination" />
          <div className="black-blur-dark"></div>
          <div className="dn-place-data-absolute">
            <div className="dn-place-data">
              <h3>SIRO Boka Place, Montenegro</h3>
              <p>
              Experience a haven of nature, adventure and wellbeing at this coastal SIRO destination. Opening soon.
              </p>
              <button>DISCOVER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
