import React from "react";
import EventMain from "../components/EventMain";
import Navbar from "../components/Navbar";

export default function EventPage() {
  return (
    <>
      <div className="theme-root light">
        <Navbar />
        <div
          className="jsx-2566509379 page-wrapper wide-page-wrapper"
          style={{
            paddingTop: "4.5rem",
          }}
        >
          <div className="jsx-2566509379 page-content">
            <EventMain />
          </div>
        </div>
      </div>
    </>
  );
}
