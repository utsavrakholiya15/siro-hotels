import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-item">
            <h4>Connect</h4>
            <a href="Instagram">Instagram</a>
          </div>
          <div className="footer-item">
            <h4>News</h4>
            <a href="Media">Media</a>
          </div>
          <div className="footer-item">
            <h4>Terms & Conditions</h4>
            <a href="Website Terms">Website Terms</a>
            <a href="Global Privacy Policy">Global Privacy Policy</a>
            <a href="Payment and Cancellation Policy">Payment and Cancellation Policy</a>
          </div>
          <div className="footer-item">
            <h4>Kerzner</h4>
            <a href="Atlatis">Atlantis</a>
            <a href="One & Only">One & Only</a>
            <a href="Rare Find">Rare Finds</a>
            <a href="Careers">Careers</a>
          </div>
          <div className="footer-item">
          <h4>Stay Connected</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
