import React, { useEffect } from "react";
import Herobanner from "./herobanner";
import Travel from "./travel";
import Powerd from "./powerd";
import Place from "./place";
import Olaya from "./olaya";
import Member from "./member";
import HomeJournal from "./homeJournal";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  const handleOnScroll = (ev) => {
    console.log(window.scrollY);
  };
  return (
    <div onScroll={handleOnScroll}>
      <Herobanner />
      <Travel />
      <Powerd />
      <Place />
      <Olaya />
      <Member />
      <HomeJournal />
    </div>
  );
}
