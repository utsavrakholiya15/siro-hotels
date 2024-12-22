import React, { useState } from "react";
import "./journal.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../assets/IMAGEs/slider1.webp";
import slider2 from "../../../assets/IMAGEs/slider2.webp";
import slider3 from "../../../assets/IMAGEs/slider3.jpg";
import slider4 from "../../../assets/IMAGEs/slider4.jpg";
import slider5 from "../../../assets/IMAGEs/slider5.webp";
import slider6 from "../../../assets/IMAGEs/slider6.webp";
import slider7 from "../../../assets/IMAGEs/slider7.webp";
import slider8 from "../../../assets/IMAGEs/slider8.webp";
import slider9 from "../../../assets/IMAGEs/slider9.webp";
import slider10 from "../../../assets/IMAGEs/slider10.webp";
import slider11 from "../../../assets/IMAGEs/slider11.webp";
import leftArrow from "../../../assets/ICONs/leftArrowBlack.svg";
import rightArrow from "../../../assets/ICONs/rightArrowBlack.svg";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="left-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        style={{ width: "28px", height: "28px" }}
        src={leftArrow}
        alt="left"
      />
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="right-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        style={{ width: "28px", height: "28px" }}
        src={rightArrow}
        alt="right"
      />
    </div>
  );
}
export default function HomeJournal() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{
      breakpoint: 600,
      settings:{
        prevArrow:<></>,
        nextArrow:<></>,
      }
    }]
  };
  return (
    <div className="journal">
      <div className="container">
        <div className="journal-title">
          <h2>SIRO Journal</h2>
        </div>
        <Slider {...settings}>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider1} alt="first" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="team-siro">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider2} alt="second" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider2">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider3} alt="third" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider3">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider4} alt="fourth" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider4">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider5} alt="fifth" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider5">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider6} alt="sixth" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slide6r">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider7} alt="seventh" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider7">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider8} alt="eight" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider8">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider9} alt="ninth" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider9">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider10} alt="ten" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider10">READ MORE</a>
            </div>
          </div>
          <div className="slider-item" style={{ width: "432px" }}>
            <div className="slider-img">
              <img src={slider11} alt="eleven" />
            </div>
            <div className="slider-text">
              <p>TEAM SIRO</p>
              <h2>Meet Team SIRO</h2>
              <a href="slider10">READ MORE</a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
