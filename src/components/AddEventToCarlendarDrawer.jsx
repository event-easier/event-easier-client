import {
  Box,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Card,
  FormControl,
  Image,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  CardBody,
  Stack,
  Collapse,
  Avatar,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findOne } from "../services/events";
import axios from "axios";
import { useEffect } from "react";
export default function AddEventToCarlendarDrawer({
  isOpen,
  onOpen,
  onClose,
  finalFocusRef,
}) {
  const { isOpen: Open1, onToggle: onToggle1 } = useDisclosure();
  const { isOpen: Open2, onToggle: onToggle2 } = useDisclosure();
  const [value, setValue] = useState("");
  const [event, setEvent] = useState("");
  const [submit, setSubmit] = useState(true);
  const [calendar, setCalendars] = useState([]);
  const { id } = useParams();
  const client = axios.create({
    // baseURL: `http://localhost:8081/api/v1/calendar/`,
    baseURL: "https://event-easier-staging.onrender.com/api/v1/",
    // baseURL: `https://event-easier-client-934bfbbxs-x-career.vercel.app/`,
  });

  client.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${a.token}`;
    return config;
  });
  let a = JSON.parse(localStorage.getItem("profile-data"));
  useEffect(() => {
    try {
      client
        .post(`/calendar/${id}`)
        .then((response) => {
          setCalendars(response.data);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const navigate = useNavigate();

  const handleOnChange = async (e) => {
    setValue(e.target.value);
    const eventId = e.target.value.split("/").at(-1);
    const evntsss = await findOne({ _id: eventId });
    if (evntsss) {
      setEvent(evntsss);
      setSubmit(false);
    } else {
      setEvent("");
      setSubmit(true);
    }
  };
  const addEvent = () => {
    console.log(event._id);
    calendar.events.push(event._id);
    try {
      client
        .post(`/calendar/update/${id}`, calendar)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size={"md"}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor={"#1C1E1F"}>
        <DrawerHeader
          py={"8px"}
          px={"12px"}
          width={"100%"}
          pos="fixed"
          top={"0!important"}
          zIndex={2}
          backdropFilter={"blur(15px)"}
          borderBottom={"1px solid hsla(0,0%,100%,.08)"}
          color="white"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={onClose}
              p={"0.4375rem"}
              maxHeight={"30px"}
              bg="transparent"
              color={"hsla(0,0%,100%,.64)"}
              _hover={{
                bg: "hsla(0,0%,100%,.64)",
                color: "rgb(19,21,23)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width={21}
                height={21}
              >
                <path d="m13 17 5-5-5-5M6 17l5-5-5-5"></path>
              </svg>
            </Button>
          </div>
        </DrawerHeader>
        <DrawerBody px={"12px"}>
          <Card
            w="100%"
            backgroundColor={"transparent"}
            color="white"
            marginTop="4rem"
          >
            <Heading fontSize={"18px"}>Add Event to Calendar</Heading>
            <Button
              bg="#303131"
              mt={"20px"}
              mb={"20px"}
              _hover={{ bg: "#AAABAB", color: "#131517" }}
              onClick={() => navigate("/create-event-calendar/")}
            >
              Create New Event
            </Button>
            <hr style={{ border: "1px solid #303131" }} />
            <Button
              onClick={(onToggle2, onToggle1)}
              bg="#303131"
              mt={"20px"}
              mb={"20px"}
              _hover={{ bg: "#AAABAB", color: "#131517" }}
            >
              {Open1 ? "✔ " : ""}
              Add Existing Event
            </Button>
            <Collapse in={Open1}>
              <Box p="0px" color="white" rounded="md" shadow="md" mb={"30px"}>
                <Heading fontSize={"14px"}> Event Link</Heading>
                <Input
                  value={value}
                  placeholder="https://event-easier-client-934bfbbxs-x-career.vercel.app/"
                  onChange={handleOnChange}
                />
                {event != "" ? (
                  <Box
                    bg={"#212325"}
                    p={"10px"}
                    mt={"20px"}
                    borderRadius={"10px"}
                  >
                    <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                      <GridItem w="100%" colSpan={2}>
                        <Image src={event.cover} />
                      </GridItem>
                      <GridItem w="100%" colSpan={4} p={"10px"}>
                        <Heading fontSize={"14px"}> {event.name}</Heading>
                        <p>{event.start_time}</p>
                      </GridItem>
                    </Grid>
                  </Box>
                ) : (
                  ""
                )}
                <Button
                  bg="#FFFFFF"
                  mt={"20px"}
                  mb={"20px"}
                  w={"100%"}
                  style={{}}
                  isDisabled={submit}
                  color={"#131517"}
                  onClick={addEvent}
                >
                  Add Event
                </Button>
              </Box>
            </Collapse>
            <Button
              onClick={(onToggle1, onToggle2)}
              bg="#303131"
              mt={"0px"}
              mb={"20px"}
              _hover={{ bg: "#AAABAB", color: "#131517" }}
            >
              {Open2 ? "✔ " : ""}
              Add Event on External Platform
            </Button>
            <Collapse in={Open2}>
              <Box p="0px" color="white" rounded="md" shadow="md" mb={"30px"}>
                <FormControl>
                  <FormLabel>Event Page URL *</FormLabel>
                  <Input type="link" placeholder="https://www.youtube.com/" />
                  <FormLabel>Event Name *</FormLabel>
                  <Input type="link" placeholder="https://www.youtube.com/" />
                  <FormLabel mt={"20px"}>Event Location</FormLabel>
                  <Box
                    m={"0px"}
                    position={"relative"}
                    bottom={"-30px"}
                    left={"5px"}
                    zIndex={12}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854Z"></path>
                        <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                      </g>
                    </svg>
                  </Box>
                  <Input pl={"30px"} placeholder="enter your country"></Input>
                  <FormLabel>Host</FormLabel>
                  <Input type="link" placeholder="https://www.youtube.com/" />
                </FormControl>
              </Box>
            </Collapse>
          </Card>{" "}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
