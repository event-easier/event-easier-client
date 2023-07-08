import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  TabPanels,
  Input,
  TabPanel,
  Text,
  Flex,
  TabList,
  Tabs,
  Tab,
  useDisclosure,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import CalendarNoUpComing from "../components/CalendarNoUpComing";
import Calendar from "../components/Calendar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CalendarContext } from "../context/CalendarProvider";
import { useRef } from "react";
import { Link as ReactLink } from "react-router-dom";
import AddEventToCarlendarDrawer from "../components/AddEventToCarlendarDrawer";
import EventCard from "../components/EventCard";
import LineWithDot from "../components/LineWithDot";
export default function CalendarsDetail() {
  window.scrollTo(0, 0);
  const { imgBackground } = useContext(CalendarContext);
  const roleRef = useRef({ role: "GUEST", subscribed: false });
  const [role, setRole] = useState("subscribe");
  const { id } = useParams();
  let a = JSON.parse(localStorage.getItem("profile-data"));
  console.log(a);
  const userCalendar = a.calendars;
  const [calendars, setCalendars] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const addCarlendarRef = React.useRef();
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const client = axios.create({
    // baseURL: `http://localhost:8081/api/v1/`,
    baseURL: "https://event-easier-staging.onrender.com/api/v1",
    // baseURL: `https://event-easier-client-934bfbbxs-x-career.vercel.app/`,
  });

  client.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${a.token}`;
    return config;
  });
  useEffect(() => {
    try {
      client.post(`/calendar/${id}`).then((response) => {
        setCalendars(response.data);
        setEvents(response.data.events);
      });
    } catch (error) {
      console.log("error in callendar: \n", error);
    }
  }, []);

  if (calendars && calendars.people) {
    if (
      calendars.people.some(
        (obj) => obj.user_id === a._id && obj.subscribed === true
      )
    ) {
      roleRef.current = { role: "GUEST", subscribed: true };
    }
  }
  useEffect(() => {
    events.forEach((event) => {
      if (event) {
        try {
          client.get(`event/detail/${event}`).then((response) => {
            const newEvent = {
              id: event,
              data: response.data.data,
            };
            setEvent((prevState) => ({
              ...prevState,
              [event]: newEvent,
            }));
          });
        } catch (error) {
          console.log("error in calendar: \n", error);
        }
      }
    });
  }, [events.length]);

  const isInArray = imgBackground.includes(calendars.cover);
  useEffect(() => {
    const role = userCalendar.some(
      (obj) => obj.id === id && obj.role === "ADMIN"
    );
    if (role) {
      roleRef.current = { role: "ADMIN", subscribed: false };
    }
  }, [userCalendar, id]);

  const eventArray = Object.values(event);
  const submit = roleRef.current.role === "ADMIN";

  const handleSubscribed = (sub) => {
    if (sub.subscribed === false) {
      try {
        client.post(`/calendar/subscribe/${id}`).then((response) => {
          console.log("subscribe");
          roleRef.current = { role: "GUEST", subscribed: true };
          window.location.reload();
        });
      } catch (error) {
        console.log("error in callendar: \n", error);
      }
    } else
      try {
        client.post(`/calendar/unsubscribe/${id}`).then((response) => {
          console.log("unsubscribe");
          roleRef.current = { role: "GUEST", subscribed: false };
          window.location.reload();
        });
      } catch (error) {
        console.log("error in callendar: \n", error);
      }
  };
  console.log(roleRef.current);
  return (
    <Box
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        paddingBottom: "64px",
      }}
    >
      <Navbar></Navbar>

      {isInArray ? (
        <div
          style={{
            height: "300px",
            zIndex: 3,
            backgroundColor: calendars.color,
            WebkitMaskImage: "url(" + calendars.cover + ")",
            //   backgroundImage: calendars.cover,
          }}
        ></div>
      ) : (
        <div
          style={{
            height: "300px",
            zIndex: 3,
            backgroundColor: calendars.color,
            //   WebkitMaskImage: "url(" + calendars.cover + ")",
            backgroundImage: "url(" + calendars.cover + ")",
            backgroundSize: "cover",
          }}
        ></div>
      )}
      <Box>
        <Box
          //   bgGradient="linear(to - b,red, rgb(19, 21, 23))"
          bgGradient={`linear(to-b, ${calendars.color}, rgb(19, 21, 23))`}
          opacity={"15%"}
          w={"100%"}
          h={"180px"}
          display={"inline-block"}
          position="absolute"
        ></Box>
        <Box
          style={{
            maxWidth: "1000px",
            blockSize: "border-box",
            margin: "0px auto 0px auto",
            padding: "10px 16px 0px 16px",
          }}
        >
          <Box>
            <Box
              position={"relative"}
              top={-10}
              display={"inline-block"}
              border={"2px solid black"}
              w={"94px"}
              h={"94px"}
              bgSize={"cover"}
              borderRadius={"10px"}
              bgImg={calendars.avatar}
            ></Box>
            {roleRef.current.role === "ADMIN" ? (
              <ReactLink to={`/calendars-manager/${id}`}>
                <Button
                  border={`2px solid ${calendars.color}`}
                  color={calendars.color}
                  variant="outline"
                  float={"right"}
                  _hover={{
                    bg: calendars.color,
                    color: "white",
                    border: `2px solid ${calendars.color}`,
                  }}
                >
                  Manage
                </Button>
              </ReactLink>
            ) : roleRef.current.role === "GUEST" &&
              roleRef.current.subscribed === false ? (
              <Button
                border={`2px solid ${calendars.color}`}
                color={calendars.color}
                variant="outline"
                float={"right"}
                _hover={{
                  bg: calendars.color,
                  color: "white",
                  border: `2px solid ${calendars.color}`,
                }}
                onClick={() => handleSubscribed(roleRef.current)}
              >
                Subscribed
              </Button>
            ) : (
              <Button
                border={`2px solid ${calendars.color}`}
                color={calendars.color}
                variant="outline"
                float={"right"}
                onClick={() => handleSubscribed(roleRef.current)}
                _hover={{
                  bg: calendars.color,
                  color: "white",
                  border: `2px solid ${calendars.color}`,
                }}
              >
                Un subscribed
              </Button>
            )}
          </Box>
          <Heading
            as="h2"
            style={{ fontSize: "36px" }}
            mb={"0px"}
            mt={"0px"}
            position={"relative"}
          >
            {calendars.calendarName}
          </Heading>
          <Heading
            position={"relative"}
            as="h3"
            style={{ fontSize: "16px", color: "#CBCBCB" }}
            mb={"0px"}
            mt={"10px"}
          >
            {calendars.description}
          </Heading>
        </Box>
        <hr style={{ border: " 1px solid #252729", marginTop: "20px" }} />
        <Box
          style={{
            maxWidth: "1000px",
            blockSize: "border-box",
            margin: "20px auto 0px auto",
            padding: "10px 16px 0px 16px",
          }}
        >
          <Grid templateColumns="repeat(7, 1fr)" gap={6}>
            <GridItem colSpan={5}>
              <Heading
                as="h2"
                style={{ fontSize: "24px" }}
                mb={"0px"}
                mt={"0px"}
                display={"inline-block"}
              >
                Events
              </Heading>
              <Button
                color="#ffffffa3"
                p="0px"
                w={"30px"}
                ml="10px"
                size="sm"
                bgColor={"#ffffff14"}
                style={{ float: "right" }}
                _hover={{
                  background: "#ffffffa3",
                  color: "#131517",
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    display: "block",
                    width: "0.875rem",
                    height: "0.875rem",
                    flexShrink: 0,
                    strokeWidth: 2.5,
                  }}
                >
                  <path
                    d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"
                    style={{ boxSizing: "border-box" }}
                  />
                  <circle
                    cx="5"
                    cy="19"
                    r="1"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>
              </Button>

              <Button
                color="#ffffffa3"
                isDisabled={!submit}
                ref={addCarlendarRef}
                onClick={onOpen}
                p="0px"
                w={"120px"}
                m="0px"
                size="sm"
                bgColor={"#ffffff14"}
                style={{ float: "right" }}
                _hover={{
                  background: "#ffffffa3",
                  color: "#131517",
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    display: "block",
                    width: "0.875rem",

                    height: "0.875rem",

                    flexShrink: 0,
                    strokeWidth: 2.5,
                    marginRight: "0.375rem",
                  }}
                >
                  <path
                    d="M12 5v14M5 12h14"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>
                <div
                  className="label"
                  style={{
                    boxSizing: "border-box",
                    margin: "-4px 0px",
                    padding: "4px 0px",
                    overflow: "hidden",
                    lineHeight: 1,
                    textOverflow: "ellipsis",
                  }}
                >
                  {roleRef.current.role === "ADMIN"
                    ? "Add Event"
                    : "Submit Event"}
                </div>
              </Button>

              {eventArray.length > 0 ? (
                eventArray.map((event) => (
                  <Flex mb="20px" mt={"30px"}>
                    <div>
                      <Text w="100px">
                        {" "}
                        {new Date(event.data.start_time).toLocaleDateString(
                          "en-GB"
                        )}
                      </Text>
                    </div>
                    <Flex w={"80%"}>
                      <LineWithDot />
                      <EventCard event={event.data} />
                    </Flex>
                  </Flex>
                ))
              ) : (
                <CalendarNoUpComing />
              )}
            </GridItem>

            <AddEventToCarlendarDrawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={addCarlendarRef}
            />
            <GridItem w="100%" colSpan={2}>
              <Box
                border={"1px solid #252729"}
                borderRadius={"10px"}
                color={"#C0C0C0"}
              >
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    display: "inline-block",
                    marginRight: "10px",
                    padding: "0px auto",
                    position: "relative",
                    top: "-2px",
                    left: "5px",
                    width: "0.875rem",
                    height: "0.875rem",
                    color: "rgba(255, 255, 255, 0.79)",
                    fontSize: "14px",
                    font: '14px / 21px -apple-system, BlinkMacSystemFont, Inter, Roboto, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    lineHeight: "21px",
                  }}
                >
                  <path
                    d="M9 15.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm-.523-7.463A.748.748 0 0 1 8.25 9V5a.75.75 0 0 1 1.5 0v3.69l1.195 1.194a.75.75 0 0 1-1.061 1.06L8.477 9.538Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>
                Events times in GMT+7.
              </Box>
              <Box
                border={"1px solid #252729"}
                borderRadius={"10px"}
                color={"#C0C0C0"}
                mt={"10px"}
              >
                <Calendar color={calendars.color}></Calendar>
                <Tabs variant="soft-rounded">
                  <TabList>
                    <Box
                      bg={"#313131"}
                      p={"3px"}
                      borderRadius={"7px"}
                      w={"100%"}
                    >
                      <Tab
                        w={"50%"}
                        fontSize={"10px"}
                        borderRadius={"7px"}
                        color={"#969696"}
                        _selected={{ bg: "#4E4E4E", color: "#F6F6F6" }}
                        display={"inline-block"}
                      >
                        Upcoming
                      </Tab>
                      <Tab
                        w={"50%"}
                        fontSize={"10px"}
                        borderRadius={"7px"}
                        color={"#969696"}
                        _selected={{ bg: "#4E4E4E", color: "#F6F6F6" }}
                        display={"inline-block"}
                      >
                        Past
                      </Tab>
                    </Box>
                  </TabList>
                </Tabs>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
