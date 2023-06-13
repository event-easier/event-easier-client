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
    const [events, setEvents] = useState([])
    const [initRenderFlag, setInitRenderFlag] = useState(true)

    const upcomingEvents = events.filter((event) => {
        const end_time = event.end_time;
        return new Date().valueOf() < new Date(end_time).valueOf()
    })

    const pastEvents = events.filter((event) => {
        const end_time = event.end_time;
        return new Date().valueOf() > new Date(end_time).valueOf()
    })

    const fetchEventsData = async () => {
        const id = JSON.parse(localStorage.getItem('profile-data'))?.data?.data._id
        const events_update = await getAllEvents(
            {
                user_id: id
            }
        )
        setEvents(events_update.data)
    }

    useEffect(() => {
        setInitRenderFlag(true);
        fetchEventsData();
        setInitRenderFlag(false);
    }, [])  //Get events state
    return (
        <AppContext.Provider
            value={{
                width,
                height,
                commonBreakPoint,
                navigate,
                events, setEvents,
                upcomingEvents,
                pastEvents,
                initRenderFlag, setInitRenderFlag
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
