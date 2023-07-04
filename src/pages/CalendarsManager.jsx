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
  InputGroup,
  InputLeftAddon,
  Grid,
  Circle,
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
import { useState } from "react";
import { Navigate, Link as ReactLink, useParams } from "react-router-dom";
import CalendarNoUpComing from "../components/CalendarNoUpComing";
export default function CalendarsManager() {
  const { id } = useParams();

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
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            w={"28px"}
            h={"28px"}
            display={"inline-block"}
          />
        </Box>
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
                <CalendarNoUpComing></CalendarNoUpComing>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
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
