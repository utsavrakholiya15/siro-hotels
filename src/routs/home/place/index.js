import React from 'react'
import './place.scss';
import placeVideo from '../../../assets/VIDEOs/SIRO BOKA PLACE HOMEPAGE.mp4';
export default function Place() {
  return (
    <div className="place">
      <div className="place-video">
        <video autoPlay muted loop src={placeVideo}></video>
      </div>
      <div className="black-blur"></div>
      <div className="place-text">
        <span>OUR HOTELS</span>
        <h2>SIRO Boka Place, Montenegro</h2>
        <p>Experience a haven of nature, adventure and wellbeing at this coastal SIRO destination. Opening soon.</p>
        <button>EXPLORE</button>
      </div>
    </div>
  )
}
