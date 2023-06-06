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
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import LineWithDot from "../components/LineWithDot";

const upcoming_events = undefined;

const past_events = [
  {
    id: 1,
    categories: ["Article"],
    title: "Title A",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    date: "March 30, 2022",
  },
  {
    id: 2,
    categories: ["Web Dev", "OSS"],
    title: "Title B",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
  {
    id: 3,
    categories: ["Web Dev", "OSS"],
    title: "Title B",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "January 30, 2022",
  },
  {
    id: 4,
    categories: ["Web Dev", "OSS"],
    title: "Title B",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
  {
    id: 5,
    categories: ["Web Dev", "OSS"],
    title: "Title B",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
  {
    id: 6,
    categories: ["Web Dev", "OSS"],
    title: "Title B",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
];

export default function Home() {
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
          paddingTop: "96px",
          background:
            "linear-gradient(rgba(174, 47, 206, 0.2) 0%, rgba(232, 115, 55, 0.1) 52.58%, rgba(153, 93, 8, 0) 100%)",
        }}
      ></div>
      <div
        style={{
          display: "block",
          maxWidth: "1000px",
          blockSize: "border-box",
          margin: "0px auto 0px auto",
          padding: "48px 16px 0px",
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
                {!upcoming_events ? (
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
                  upcoming_events?.map((event, index) => (
                    <Flex key={index} mb="10px">
                      <LineWithDot />
                      <EventCard {...event} />
                    </Flex>
                  ))
                )}
              </Container>
            </TabPanel>
            <TabPanel>
              <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
                {!past_events ? (
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
                  past_events.map((event, index) => (
                    <Flex key={index} mb="10px">
                      <div>
                        <Text w="100px"> {event.date}</Text>
                      </div>
                      <Flex>
                        <LineWithDot />
                        <EventCard {...event} />
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
    </div>
  );
}
