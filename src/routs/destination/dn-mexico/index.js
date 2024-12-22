import React from 'react'
import './dn-mexico.scss';
import dnMexicoImg from '../../../assets/IMAGEs/dn-mexico.jpg';
export default function DnMexico() {
  return (
    <div className="container">
      <div className="dn-mexico">
        <div className="dn-mexico-img">
          <img className="img-full" src={dnMexicoImg} alt='destination' />
          <div className="black-blur-dark"></div>
          <div className="dn-mexico-data-absolute">
            <div className="dn-mexico-data">
              <h3>SIRO Palmilla, Mexico</h3>
              <p>
              Situated on the southern tip of Mexico's Baja Peninsula in Los Cabos, SIRO Palmilla provides guests with striking surroundings to elevate their wellbeing journey.
              </p>
              <p>Coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
