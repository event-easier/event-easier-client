import React, { useState, useEffect } from "react";
import EventMain from "../components/EventMain";
import Navbar from "../components/Navbar";
import {
  createEvent,
  getAllEvents,
  findOne,
  updateById,
} from "../services/events";
import { useParams } from "react-router-dom";

export default function EventPage() {
  let { eid } = useParams();
  const [eventData, setEventData] = useState('');
  console.log(eid);

  const fetchEventData = async () => {
    
    const _event = await findOne({
      _id: eid,
    });
    setEventData(_event.data);
    
  };
  console.log("event",eventData);
  useEffect(() => {
    fetchEventData();
    }, []);
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
            <EventMain event={eventData.data }/>
          </div>
        </div>
      </div>
    </>
  );
}
