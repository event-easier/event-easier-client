import {
  Container,
  Heading,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import LineWithDot from "../components/LineWithDot";
import { createEvent, getAllEvents, findOne, updateById } from "../services/events";
import TestAPIButtons from "../components/TestAPIButtons";
import { useEffect } from "react";
import { AppContext } from "../context/AppProvider";

//* EVENT SCHEMA - check event_data.json in /services

export default function Home() {
  const { upcomingEvents, pastEvents} = useContext(AppContext)

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
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
        <Heading pb={"20px"}>Events</Heading>
        <Tabs variant="unstyled">
          <TabList
            style={{
              margin: "0px 0px 8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "hsla(0,0%,100%,.08)",
                  display: "flex",
                }}
              >
                <Tab
                  p="8px 16px"
                  color="hsla(0,0%,100%,.64)"
                  _selected={{ color: "white", bg: "#fff2" }}
                  fontSize={"0.8rem"}
                  fontWeight={"bold"}
                >
                  Upcoming
                </Tab>
                <Tab
                  p="8px 16px"
                  color="hsla(0,0%,100%,.64)"
                  _selected={{ color: "white", bg: "#fff2" }}
                  fontSize={"0.8rem"}
                  fontWeight={"bold"}
                >
                  Past
                </Tab>
              </div>
            </div>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
                {(upcomingEvents == []) ? (
                  <div>
                    <Heading as="h5" fontSize="3xl" m="24px 0 0" p="0 48px">
                      No Upcoming Events
                    </Heading>
                    <Text
                      fontSize="2xl"
                      fontWeight="light"
                      m="24px 0 0"
                      p="0 48px"
                    >
                      You have no upcoming events. Why not host one?
                    </Text>
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      m="24px 48px 0"
                      p="0 48px"
                    >
                      <Text fontWeight="bold">Create Event</Text>
                    </Button>
                  </div>
                ) : (
                  upcomingEvents?.map((event, index) => (
                    <Flex key={index} mb="20px">
                      <div>
                        <Text w="100px"> {new Date(event.start_time).toLocaleDateString('en-GB')}</Text>
                      </div>
                      <LineWithDot />
                      <EventCard event={event} />
                    </Flex>
                  ))
                )}
              </Container>
            </TabPanel>
            <TabPanel>
              <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
                {(pastEvents == []) ? (
                  <div>
                    <Heading as="h5" fontSize="3xl" m="24px 0 0" p="0 48px">
                      No Past Events
                    </Heading>
                    <Text
                      fontSize="2xl"
                      fontWeight="light"
                      m="24px 0 0"
                      p="0 48px"
                    >
                      You have no past events. Why not host one now?
                    </Text>
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      m="24px 48px 0"
                      p="0 48px"
                    >
                      <Text fontWeight="bold">Create Event</Text>
                    </Button>
                  </div>
                ) : (
                  pastEvents.map((event, index) => (
                    <Flex key={index} mb="20px">
                      <div>
                        <Text w="100px"> {new Date(event.start_time).toLocaleDateString('en-GB')}</Text>
                      </div>
                      <Flex>
                        <LineWithDot />
                        <EventCard event={event} />
                      </Flex>
                    </Flex>
                  ))
                )}
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div
        style={{
          margin: "0px 48.5px",
          padding: "32px 16px 16px",
        }}
      ></div>
      {/* TEST API CONTROL */}
      {/* <TestAPIButtons
        events={events}
        upcoming_events={upcomingEvents}
        past_events={pastEvents}
      /> */}
    </div>
  );
}
