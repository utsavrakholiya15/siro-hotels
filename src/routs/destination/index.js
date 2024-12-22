import React, { useEffect } from "react";
import DnHb from "./dn-hb";
import DnDubai from "./dn-dubai";
import DnPlace from "./dn-place";
import DnOlaya from "./dn-olaya";
import DnMexico from "./dn-mexico";
import { useLocation } from "react-router-dom";

export default function Destination() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div>
      <DnHb />
      <DnDubai />
      <DnPlace />
      <DnOlaya />
      <DnMexico />
    </div>
  );
}
