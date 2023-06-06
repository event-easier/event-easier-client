import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Calendars from "./pages/Calendars";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";
import EventsManager from "./pages/EventsManager";
import Personal from "./pages/Personal";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";
import DiscoverEvents from "./pages/DiscoverEvents";
import CalendarsManager from "./pages/CalendarsManager";
import CreateCalendar from "./pages/CreateCalendar";
import CalendarSettings from "./pages/CalendarSettings";
import EventSettings from "./pages/EventSettings";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./context/AuthProvider";
import ProfileSetup from "./pages/ProfileSetup";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  const routes = [
    {
      path: "/*",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <Suspense fallback={<div>Loading...</div>} ><LandingPage /></Suspense>,
    },
    {
      path: "/event/:eid",
      element: <EventPage />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/home/calendars",
      element: <Calendars />,
    },
    {
      path: "/personal",
      element: <Personal />,
    },
    {
      path: "/discover",
      element: <DiscoverEvents />,
    },
    {
      path: "/personal",
      element: <Personal />,
    },
    {
      path: "/discover",
      element: <DiscoverEvents />,
    },
    {
      path: "/user/:uid/profile",
      element: <UserProfile />,
    },
    {
      path: "/user/:uid/settings",
      element: <Settings />,
    },
    {
      path: "/user/:uid/profile",
      element: <UserProfile />,
    },
    {
      path: "/events-manager",
      element: <EventsManager />,
    },
    {
      path: "/create-event",
      element: <CreateEvent />,
    },
    {
      path: "/event-settings",
      element: <EventSettings />,
    },
    {
      path: "/calendars-manager",
      element: <CalendarsManager />,
    },
    {
      path: "/create-calendar",
      element: <CreateCalendar />,
    },
    {
      path: "/calendar-settings",
      element: <CalendarSettings />,
    },
    {
      path: "/profile-setup",
      element: <ProfileSetup />,
    },
  ];
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {
            routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
          }
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
