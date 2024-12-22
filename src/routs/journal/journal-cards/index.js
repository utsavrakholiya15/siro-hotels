import React from "react";
import "./journal-cards.scss";
import journalCardsItem1 from "../../../assets/IMAGEs/slider1.webp";
import journalCardsItem2 from "../../../assets/IMAGEs/slider2.webp";
import journalCardsItem3 from "../../../assets/IMAGEs/slider3.jpg";
import journalCardsItem4 from "../../../assets/IMAGEs/slider4.jpg";
import journalCardsItem5 from "../../../assets/IMAGEs/slider5.webp";
import journalCardsItem6 from "../../../assets/IMAGEs/slider6.webp";
import journalCardsItem7 from "../../../assets/IMAGEs/slider7.webp";
import journalCardsItem8 from "../../../assets/IMAGEs/slider8.webp";
import journalCardsItem9 from "../../../assets/IMAGEs/slider9.webp";
import journalCardsItem10 from "../../../assets/IMAGEs/slider10.webp";
import journalCardsItem11 from "../../../assets/IMAGEs/slider11.webp";
export default function JournalCards() {
  return (
    <div className="container">
      <div className="journal-cards">
        <div className="journal-cards-text">
          <p>
            Welcome to The Journal, your portal into the world of SIRO. Discover
            in-depth insights into Team SIRO, dive into the latest SIRO news,
            and access exclusive content. Stay informed, stay inspired and stay
            connected with The Journal.
          </p>
        </div>
        <div className="journal-cards-grid">
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem1} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem2} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem3} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem4} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem5} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem6} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem7} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem8} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem9} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem10} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
          <div className="journal-cards-item">
            <div className="journal-cards-item-img">
              <img img src={journalCardsItem11} alt="journal-image" />
            </div>
            <div className="journal-cards-item-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="READ MORE">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
