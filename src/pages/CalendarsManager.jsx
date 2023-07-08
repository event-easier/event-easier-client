import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Heading,
  Select,
  extendTheme,
  ChakraProvider,
  Button,
  Input,
  RadioGroup,
  Radio,
  Flex,
  InputGroup,
  GridItem,
  InputLeftAddon,
  Grid,
  Circle,
  Text,
  Modal,
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  FormHelperText,
  FormErrorMessage,
  TabIndicator,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import CalendarCardDrawer from "../components/CalendarCardDrawer";
import { useContext } from "react";
import { BlockPicker, ChromePicker } from "react-color";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link as ReactLink, useParams } from "react-router-dom";
import CalendarNoUpComing from "../components/CalendarNoUpComing";
import AddEventToCarlendarDrawer from "../components/AddEventToCarlendarDrawer";
import LineWithDot from "../components/LineWithDot";
import EventCard from "../components/EventCard";
import { CalendarContext } from "../context/CalendarProvider";
import CalendarSettings from "../components/CalendarSettings";
import CalendarOptions from "../components/CalendarOptions";
import CalendarPluss from "../components/CalendarPluss";
import CalendarAdmin from "../components/CalendarAdmin";
export default function CalendarsManager() {
  const { id } = useParams();
  const [calendars, setCalendars] = useState([]);
  const [listEvent, setListEvent] = useState([]);
  const [events, setEvents] = useState([]);
  let a = JSON.parse(localStorage.getItem("profile-data"));
  const addCarlendarRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState("Display");

  const { imgBackground } = useContext(CalendarContext);
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
        setListEvent(response.data.events);
      });
    } catch (error) {
      console.log("error in callendar: \n", error);
    }
  }, []);
  useEffect(() => {
    if (listEvent.length > 0) {
      listEvent.forEach((envnt) => {
        try {
          client.get(`/event/${envnt}`).then((response) => {
            setEvents((prevEvents) => [...prevEvents, response.data]);
          });
        } catch (error) {
          console.log("error in callendar: \n", error);
        }
      });
    }
  }, [listEvent.length]);

  const isInArray = imgBackground.includes(calendars.cover);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        paddingBottom: "64px",
      }}
    >
      <Navbar style={{ zIndex: 2 }} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          blockSize: "border-box",
          margin: "0px auto 0px auto",
          padding: "150px 16px 0px",
        }}
      >
        <Box>
          <Image
            src={calendars.avatar}
            alt="Dan Abramov"
            w={"28px"}
            h={"28px"}
            display={"inline-block"}
          />
        </Box>
        <AddEventToCarlendarDrawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={addCarlendarRef}
        />
        <Box mt={"10px"}>
          <Tabs variant={"unstyled"} borderBottom={"1px soild red"}>
            <TabList>
              <Tab>Events</Tab>

              <Tab borderBottom={"1px soild red"}>People</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <hr
              style={{ border: " 1px solid #252729", position: "relative" }}
            />
            <TabPanels>
              {" "}
              <TabPanel>
                <Heading as={"h3"} fontSize={"24px"} display={"inline"}>
                  Events
                </Heading>
                <Button
                  size="xs"
                  ref={addCarlendarRef}
                  onClick={onOpen}
                  borderRadius={"50%"}
                  color="#ffffffa3"
                  display={"inline-block"}
                  bgColor={"#ffffff14"}
                  ml={"10px"}
                  fontSize={"14px"}
                  mb={"5px"}
                  _hover={{
                    background: "#ffffffa3",
                    color: "#131517",
                  }}
                >
                  +
                </Button>
                <Tabs variant="soft-rounded" float={"right"}>
                  <TabList>
                    <Box
                      bg={"#313131"}
                      p={"3px"}
                      borderRadius={"7px"}
                      w={"220px"}
                    >
                      <Tab
                        w={"50%"}
                        fontSize={"14px"}
                        borderRadius={"7px"}
                        color={"#969696"}
                        _selected={{ bg: "#4E4E4E", color: "#F6F6F6" }}
                        display={"inline-block"}
                      >
                        Upcoming
                      </Tab>
                      <Tab
                        w={"50%"}
                        fontSize={"14px"}
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

                {listEvent.length < 1 ? (
                  <CalendarNoUpComing />
                ) : (
                  events.map((event) => (
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
                )}
              </TabPanel>
              <TabPanel>two</TabPanel>
              {/* seting nằm đây */}
              <TabPanel>
                <Grid templateColumns="repeat(9, 1fr)" gap={6}>
                  <GridItem w="100%" colSpan={2}>
                    <Box position={"fixed"}>
                      <Heading
                        fontSize={"16px"}
                        onClick={() => handleItemClick("Display")}
                        style={{
                          color:
                            selectedItem === "Display" ? "white" : "#848990",
                        }}
                      >
                        Display
                      </Heading>
                      <Heading
                        fontSize={"16px"}
                        onClick={() => handleItemClick("Options")}
                        style={{
                          color:
                            selectedItem === "Options" ? "white" : "#848990",
                        }}
                      >
                        Options
                      </Heading>
                      <Heading
                        fontSize={"16px"}
                        onClick={() => handleItemClick("Admins")}
                        style={{
                          color:
                            selectedItem === "Admins" ? "white" : "#848990",
                        }}
                      >
                        Admins
                      </Heading>
                      <Heading
                        fontSize={"16px"}
                        onClick={() => handleItemClick("Pluss")}
                        style={{
                          color: selectedItem === "Pluss" ? "white" : "#848990",
                        }}
                      >
                        Event Easier Pluss
                      </Heading>
                    </Box>
                  </GridItem>
                  <GridItem w="100%" colSpan={7}>
                    {" "}
                    {selectedItem && (
                      <div>
                        {selectedItem === "Display" && isInArray && (
                          <CalendarSettings calendars={calendars} />
                        )}

                        {selectedItem === "Options" && (
                          <CalendarOptions></CalendarOptions>
                        )}
                        {selectedItem === "Admins" && <CalendarAdmin />}
                        {selectedItem === "Pluss" && <CalendarPluss />}
                      </div>
                    )}
                  </GridItem>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
      <ReactLink to={`/calendars/${id}`}>
        <Button
          opacity={"60%"}
          bg={"#ffffff23"}
          color={"#A5AFAF"}
          position={"absolute"}
          top={"150px"}
          right={"18%"}
          _hover={{ bg: "#BCBCBC", color: "#131517" }}
          textAlign={"right"}
          display={"inline-block"}
          zIndex={13}
          size="sm"
          float={"right"}
          pr={"30px"}
        >
          {" "}
          Calendar Page
          <Box w={"17px"} position={"absolute"} right={"7px"} top={"9px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17 17 7M7 7h10v10"></path>
            </svg>
          </Box>
        </Button>
      </ReactLink>
    </div>
  );
}
