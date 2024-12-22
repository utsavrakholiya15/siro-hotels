import React, { useEffect, useState } from "react";
import "./header.scss";
import siroLogo from "../../../assets/LOGOs/SIROlogo.svg";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAnime, setMenuAnime] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change color when scrolled 50px or more
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleOnMenu = () => {
    setMenuAnime(!menuAnime);
  };

  return (
    <header style={{ backgroundColor: isScrolled && "#1c3532" }}>
      <div className="container centering">
        <div className="header">
          <nav className="nav-left">
            <span
              onClick={() => navigate("/destination")}
              className="header-hotels"
            >
              Hotels
            </span>
            <span>Our Philosophy</span>
            <span
              onClick={() => {
                navigate("/journal");
              }}
            >
              The Journal
            </span>
            <span
              onClick={() => {
                navigate("/our-app");
              }}
            >
              Our App
            </span>
          </nav>
          <div onClick={handleOnMenu} className="menu">
            <div className="menu-bar menu-bar1"></div>
            <div className="menu-bar menu-bar2"></div>
            <div className="menu-bar menu-bar3"></div>
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="siro-logo"
          >
            <img
              className="img-full siro-logo-img"
              src={siroLogo}
              alt="journal-image"
            />
          </div>
          <nav>
            <span>Membership</span>
            <span>Stay Connected</span>
            <span>Contact Us</span>
            <button>BOOK</button>
          </nav>
          {menuAnime && (
            <div className="menu-dd">
              <div className="container h-100">
                <div className="menu-items">
                  <span
                    onClick={() => {
                      navigate("/destination");
                      setMenuAnime(false);
                    }}
                  >
                    Hotels
                  </span>
                  <span>Our Philosophy</span>
                  <span
                    onClick={() => {
                      navigate("/journal");
                      setMenuAnime(false);
                    }}
                  >
                    The Journal
                  </span>
                  <span
                    onClick={() => {
                      navigate("/our-app");
                      setMenuAnime(false);
                    }}
                  >
                    Our App
                  </span>
                  <span>Membership</span>
                  <span>Stay Connected</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
