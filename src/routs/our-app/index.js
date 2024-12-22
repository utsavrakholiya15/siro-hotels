import React, { useEffect } from "react";
import OurAppHb from "./our-app-hb";
import { useLocation } from "react-router-dom";
import Download from "./download";
export default function OurApp() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div>
      <OurAppHb />
      <Download/>
    </div>
  );
}
