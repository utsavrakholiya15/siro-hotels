import React from 'react'
import './powerd.scss';
import powerdImg from '../../../assets/IMAGEs/home-powerd.webp';
export default function Powerd() {
  return (
    <div className="powerd">
      <div className="powerd-img">
        <img className="img-full" src={powerdImg} alt='powerdImage' />
      </div>
      <div className="black-blur"></div>
      <div className="powerd-text">
        <span>TEAM SIRO</span>
        <h2>Powered by champions</h2>
        <p>Train, recover, and nourish your body with expert support while travelling. Every aspect of your SIRO hotel stay has been designed with insight from Team SIRO, a group of world-class athletes and international wellbeing experts.</p>
        <button>MEET TEAM SIRO</button>
      </div>
    </div>
  )
}
