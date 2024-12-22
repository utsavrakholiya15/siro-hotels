import React from "react";
import "./member.scss";
import membershipLogo from "../../../assets/LOGOs/Membership.svg";
import siroLogo from "../../../assets/LOGOs/SIROlogoMember.svg";
export default function Member() {
  return (
    <div className="member">
      <div className="container">
        <div className="member-grid">
          <div className="member-grid-item">
            <img src={membershipLogo} alt="membership" />
            <h3>Become a SIRO member</h3>
            <p>Join SIRO and unlock a range of exclusive fitness, wellness and retail benefits.</p>
            <button>REGISTER NOW</button>
          </div>
          <div className="member-grid-item">
            <img src={siroLogo} alt="siro-membership" />
            <h3>The SIRO app</h3>
            <p>Plan your stay and explore fitness <br/> activities and recovery treatments with a tap.</p>
            <button>REGISTER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
