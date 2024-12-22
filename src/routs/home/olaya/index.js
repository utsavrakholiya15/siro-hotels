import React from 'react'
import './olaya.scss';
import olayaVideo from '../../../assets/VIDEOs/SIRO OLAYA AND SIRO PALMILLA 1920x1080.mp4'
export default function Olaya() {
  return (
    <div className="olaya">
      <div className="olaya-video">
        <video autoPlay muted loop src={olayaVideo}></video>
      </div>
      <div className="black-blur"></div>
      <div className="olaya-text">
        <span>SIRO HOTELS</span>
        <h2>SIRO Olaya and SIRO Palmilla</h2>
        <p>Growing our global reach with the addition of two new SIRO destinations - Saudi Arabia and Mexico.</p>
        <button>DISCOVER</button>
      </div>
    </div>
  )
}
