import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Calendars from './pages/Calendars'
import CreateEvent from './pages/CreateEvent'
import EventPage from './pages/EventPage'
import EventsManager from './pages/EventsManager'
import Personal from './pages/Personal'
import Settings from './pages/Settings'
import UserProfile from './pages/UserProfile'
import DiscoverEvents from './pages/DiscoverEvents'
import CalendarsManager from './pages/CalendarsManager'
import CreateCalendar from './pages/CreateCalendar'
import CalendarSettings from './pages/CalendarSettings'
import EventSettings from './pages/EventSettings'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/event/:eid" element={<EventPage />} />
          {/*Authentication*/}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Routes for Home */}
          <Route path="/home" element={<Home />} />
          <Route path="/home/calendars" element={<Calendars />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/discover" element={<DiscoverEvents />} />
          
          {/* Routes for User */}
          <Route path="/user/:uid/profile" element={<UserProfile />} />
          <Route path="/user/:uid/settings" element={<Settings />} />
          
          {/* Routes for Event Manager */}
          <Route path="/events-manager" element={<EventsManager />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event-settings" element={<EventSettings />} />
          
          {/* Routes for Calendar Manager */}
          <Route path="/calendars-manager" element={<CalendarsManager />} />
          <Route path="/create-calendars" element={<CreateCalendar />} />
          <Route path="/calendar-settings" element={<CalendarSettings />} />

          {/* 404 */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
