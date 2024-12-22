import React from 'react'
import './dn-olaya.scss';
import dnOlayaImg from '../../../assets/IMAGEs/dn-olaya.jpg';
export default function DnOlaya() {
  return (
    <div className="container">
      <div className="dn-olaya">
        <div className="dn-olaya-img">
          <img className="img-full" src={dnOlayaImg} alt='destination' />
          <div className="black-blur-dark"></div>
          <div className="dn-olaya-data-absolute">
            <div className="dn-olaya-data">
              <h3>SIRO Olaya, Riyadh</h3>
              <p>
              Nestled within the illustrious Olaya district, this destination boasts world-class fitness and recovery amenities that cater to all your needs in Riyadh's dynamic city centre.
              </p>
              <p>Coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
