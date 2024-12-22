import React, { useEffect } from "react";
import JournalHb from "./journal-hb";
import JournalCards from "./journal-cards";
import { useLocation } from "react-router-dom";

export default function Journal() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div>
      <JournalHb />
      <JournalCards />
    </div>
  );
}
