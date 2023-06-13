import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createEvent,
  getAllEvents,
  findOne,
  updateById,
} from "../services/events";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const AppContext = React.createContext("");

export default function AppProvider({ children }) {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  const commonBreakPoint = [320, 480, 768, 1024, 1025, 1200];
  // const profile_data = JSON.parse(localStorage.getItem("profile-data")).data.data;

  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpComingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [initRenderFlag, setInitRenderFlag] = useState(true);

  const checkEventTime = (event) => {
    const current = new Date().getTime();
    const event_start = new Date(event.start_time);
    if (event_start >= current && initRenderFlag) {
      setUpComingEvents((current) => [...current, event]);
    } else if (event_start < current && initRenderFlag) {
      setPastEvents((current) => [...current, event]);
    }
  };

  const fetchEventsData = async () => {
    const id = JSON.parse(localStorage.getItem("profile-data"))._id;
    const events_update = await getAllEvents({
      user_id: id,
    });
    setEvents(events_update.data);
    events_update.data.map((event) => {
      checkEventTime(event);
    }); //This is a bad fix of getting upcoming_events state and past_events state, very bad code, but it works! :)
  };

  useEffect(() => {
    setInitRenderFlag(true);
    fetchEventsData();
    setInitRenderFlag(false);
  }, []); //Get events state
  return (
    <AppContext.Provider
      value={{
        width,
        height,
        commonBreakPoint,
        navigate,
        events,
        setEvents,
        upcomingEvents,
        setUpComingEvents,
        pastEvents,
        setPastEvents,
        initRenderFlag,
        setInitRenderFlag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
