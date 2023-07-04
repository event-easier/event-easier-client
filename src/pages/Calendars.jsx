import React from "react";
import Navbar from "../components/Navbar";
import { useState, useContext } from "react";
import {
  Container,
  Heading,
  Flex,
  Button,
  Text,
  Image,
  HStack,
  Grid,
  Center,
  Box,
  cookieStorageManagerSSR,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

import axios from "axios";
import { AuthContext } from "../context/AuthProvider";

export default function Calendars() {
  const [calendars, setCalendars] = useState([]);
  let a = JSON.parse(localStorage.getItem("profile-data"));
  const [lastEvent, setLastEvent] = useState({});

  const client = axios.create({
    // baseURL: `http://localhost:8081/api/v1/`,
    baseURL: "https://event-easier-staging.onrender.com/api/v1",
  });

  client.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${a.token}`;
    return config;
  });

  useEffect(() => {
    try {
      client.post("/calendar/").then((response) => {
        setCalendars(response.data.data);
      });
    } catch (error) {
      console.log("error in callendar: \n", error);
    }
  }, []);
  const myCalendars = calendars.filter(
    (item) => !item.people.some((p) => p.user_id === a._id)
  );
  const subCalendars = calendars.filter((item) =>
    item.people.some((p) => p.user_id === a._id)
  );
  useEffect(() => {
    subCalendars.forEach((subCalendar) => {
      if (subCalendar.events.length > 0) {
        try {
          client
            .get(`/event/${subCalendar.events[subCalendar.events.length - 1]}`)
            .then((response) => {
              const newLastEvent = {
                id: subCalendar._id,
                data: response.data.data,
              };
              setLastEvent((prevState) => ({
                ...prevState,
                [subCalendar._id]: newLastEvent,
              }));
            });
        } catch (error) {
          console.log("error in calendar: \n", error);
        }
      }
    });
  }, [subCalendars.length]);

  const renderCalendars = (calendar) => {
    const b = lastEvent[calendar._id];
    console.log("b", b);
    return (
      <Box
        w={"100%"}
        h={"170px"}
        backgroundColor={"#1C1E20"}
        borderRadius={"10px"}
        p={"16px"}
        mt={"30px"}
      >
        <HStack spacing="24px">
          <Box w={"190px"}>
            <Image
              boxSize="48px"
              objectFit="cover"
              src={calendar.avatar}
              borderRadius={"5px"}
            />
            <Heading
              mt={"16px"}
              style={{
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              color={"#FFFFFF"}
              as="h2"
            >
              {" "}
              {calendar.calendarName}
            </Heading>
            <ReactLink
              to={`/calendars/${calendar._id}`}
              // to={"/calendars-manager"}
            >
              <Button
                mt={"16px"}
                size="sm"
                color="#ffffffa3"
                p="7px 10px"
                bgColor={"#ffffff14"}
                _hover={{
                  background: "#ffffffa3",
                  color: "#131517",
                }}
              >
                View Calendar
              </Button>
            </ReactLink>
          </Box>

          <Box h={"137px"}>
            <Text color={"#828384"}>{b ? "Up Comming" : ""}</Text>

            <Heading
              mt={"16px"}
              style={{
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              color={"#FFFFFF"}
              as="h2"
              _hover={{ color: "#e6658a", transitionDuration: "0.5s" }}
            >
              {" "}
              {b
                ? new Date(b.data.start_time).toLocaleDateString("en-EN", {
                    weekday: "long",
                  })
                : ""}
            </Heading>
            <Text color={"#828384"}>
              {b
                ? new Date(b.data.start_time).toLocaleTimeString("en-EN", {
                    month: "numeric",
                    weekday: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })
                : ""}
            </Text>
          </Box>
        </HStack>
      </Box>
    );
  };

  const calendarManager = () => {};
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        paddingBottom: "64px",
      }}
    >
      <Navbar />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1000px",
          blockSize: "border-box",
          margin: "0px auto 0px auto",
          padding: "150px 16px 0px",
        }}
      >
        <Heading pb={"20px"}>Calendars</Heading>
        <div
          style={{
            width: "100%",
            marginTop: "15px",
            paddingTop: "5px",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          <Heading as="h2" size="md" pb={"15px"} display={"inline"}>
            My Calendars
          </Heading>
          <ReactLink to={"/create-calendar"}>
            <Button
              size="sm"
              color="#ffffffa3"
              p="7px 10px"
              w={87}
              m="2px"
              bgColor={"#ffffff14"}
              style={{ float: "right" }}
              _hover={{
                background: "#ffffffa3",
                color: "#131517",
              }}
            >
              + Create
            </Button>
          </ReactLink>
        </div>

        <Grid templateColumns="repeat(3, 1fr)" gap={5} mb={"30px"}>
          <Box
            cursor={"pointer"}
            p={"16px 16px 14px"}
            maxW="sm"
            borderWidth="1px"
            border={"1px solid #252729"}
            _hover={{
              border: "1px solid #ffffff29",
            }}
            background={"#1C1E20"}
            borderRadius="lg"
            overflow="hidden"
            pb={"20px"}
          >
            <Image
              boxSize="48px"
              objectFit="cover"
              src={a.avatar}
              alt={a.avatar}
              borderRadius={"50%"}
            />
            <Heading
              as="h2"
              style={{ fontSize: "18px" }}
              mb={"4px"}
              mt={"12px"}
            >
              {a.name}
            </Heading>
            <Text color={"#828384"}>2 Subscribers</Text>
            <Text
              mt={"16px"}
              color={"#828384"}
              style={{ textTransform: "lowercase" }}
            >
              Personal
            </Text>
          </Box>
          {/* Đoạn này sau là để calendars */}

          {myCalendars.map((calendar) => (
            <ReactLink
              to={`/calendars-manager/${calendar._id}`}
              // to={"/calendars-manager"}
            >
              <Box
                onClick={() => calendarManager(calendar)}
                cursor={"pointer"}
                p={"16px 16px 14px"}
                maxW="sm"
                borderWidth="1px"
                border={"1px solid #252729"}
                _hover={{
                  border: "1px solid #ffffff29",
                }}
                background={"#1C1E20"}
                borderRadius="lg"
                overflow="hidden"
                pb={"20px"}
              >
                <Image
                  boxSize="48px"
                  objectFit="cover"
                  src={calendar.avatar}
                  alt={"cover"}
                  borderRadius={"14%"}
                />
                <Heading
                  as="h2"
                  style={{ fontSize: "18px" }}
                  mb={"4px"}
                  mt={"12px"}
                >
                  {calendar.calendarName}
                </Heading>
                <Text color={"#828384"}>
                  {calendar.people.length < 1
                    ? "No Subscribers"
                    : calendar.people.length + " Subscribers"}
                </Text>
                <Flex color="white" mt={"16px"}>
                  <Center>
                    <Image
                      boxSize="16px"
                      objectFit="cover"
                      src={a.avatar}
                      alt={a.avatar}
                      borderRadius={"50%"}
                    />
                  </Center>
                  <Center>
                    <Text
                      color={"#828384"}
                      style={{ textTransform: "lowercase", fontSize: "14px" }}
                    >
                      Admin
                    </Text>
                  </Center>
                </Flex>
              </Box>
            </ReactLink>
          ))}
          {/* HẾT */}
        </Grid>

        <hr style={{ border: " 1px solid #252729" }} />

        <Heading
          as="h2"
          size="md"
          mb={"4px"}
          mt={"12px"}
          display={"inline-block"}
        >
          Discover
        </Heading>
        <Heading
          color={"#828384"}
          as="h2"
          display={"inline-block"}
          ml={"5px"}
          size="md"
          mb={"30px"}
        >
          {" "}
          Tech Events
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={5} mb={"30px"}>
          <Box
            p={"12px 16px"}
            maxW="sm"
            borderWidth="1px"
            border={"1px solid #252729"}
            _hover={{
              border: "1px solid #ffffff29",
            }}
            background={"#1C1E20"}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              boxSize="32px"
              objectFit="cover"
              src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=32,height=32/discovery/la-icon.jpg"
              alt="Dan Abramov"
              borderRadius={"5px"}
              display={"inline-block"}
            />
            <Heading
              style={{
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              color={"#FFFFFF"}
              as="h2"
              display={"inline"}
              ml={"5px"}
              position={"relative"}
              bottom={"8px"}
            >
              {" "}
              Los Angeles
            </Heading>
          </Box>
          <Box
            p={"12px 16px"}
            maxW="sm"
            borderWidth="1px"
            border={"1px solid #252729"}
            _hover={{
              border: "1px solid #ffffff29",
            }}
            background={"#1C1E20"}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              boxSize="32px"
              objectFit="cover"
              src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=32,height=32/discovery/nyc-icon.jpg"
              alt="Dan Abramov"
              borderRadius={"5px"}
              display={"inline-block"}
            />
            <Heading
              style={{
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              color={"#FFFFFF"}
              as="h2"
              display={"inline"}
              ml={"5px"}
              position={"relative"}
              bottom={"8px"}
            >
              {" "}
              New York
            </Heading>
          </Box>
          <Box
            p={"12px 16px"}
            maxW="sm"
            borderWidth="1px"
            border={"1px solid #252729"}
            _hover={{
              border: "1px solid #ffffff29",
            }}
            background={"#1C1E20"}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              boxSize="32px"
              objectFit="cover"
              src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=32,height=32/discovery/sf-icon.jpg"
              alt="Dan Abramov"
              borderRadius={"5px"}
              display={"inline-block"}
            />
            <Heading
              style={{
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              color={"#FFFFFF"}
              as="h2"
              display={"inline"}
              ml={"5px"}
              position={"relative"}
              bottom={"8px"}
            >
              {" "}
              San Francisco
            </Heading>
          </Box>
        </Grid>

        <hr style={{ border: " 1px solid #252729" }} />

        <Heading
          as="h2"
          size="md"
          mb={"4px"}
          mt={"12px"}
          display={"inline-block"}
        >
          Subscribed Calendars
        </Heading>
        {/* nếu không có ai  Subscribed*/}
        {subCalendars.length < 1 ? (
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={5}
            pb={"30px"}
            mt={"30px"}
          >
            <Box
              p={"15px"}
              maxW="sm"
              borderWidth="1px"
              border={"1px solid #252729"}
              background={"#1C1E20"}
              borderRadius="lg"
              overflow="hidden"
              pb={"20px"}
            >
              {" "}
              <div
                style={{
                  textAlign: "center",
                  width: "41px",
                  height: "41px",
                  backgroundImage: "linear-gradient(180deg, #363636, #4B4B4B)",
                  border: "1px solid #5B5B5B",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "14px",
                    backgroundImage:
                      "linear-gradient(180deg, #595959, #4A4A4A)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: "-7px",
                    left: "6px",
                  }}
                />
                <div
                  style={{
                    width: "5px",
                    height: "14px",
                    backgroundImage:
                      "linear-gradient(180deg, #595959, #4A4A4A)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: "-7px",
                    right: "6px",
                  }}
                />
                <Text
                  fontSize="3xl"
                  as="b"
                  color={"#171717"}
                  position={"relative"}
                  top={"-2px"}
                >
                  0
                </Text>
              </div>
              <Heading
                as="h2"
                style={{ fontSize: "18px" }}
                mb={"4px"}
                mt={"12px"}
                color={"#C6C6C7"}
              >
                no Subscriptions
              </Heading>
              <Text color={"#828384"}>
                You have not subscribed to any calendars.
              </Text>
            </Box>
          </Grid>
        ) : (
          subCalendars.map((calendar) => renderCalendars(calendar))
        )}

        {/* hết Subscribed*/}
      </div>
    </div>
  );
}
