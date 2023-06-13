import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import axios from "axios";

export default function Calendars() {
  // const [events, setEvents] = useState([]);
  let a = JSON.parse(localStorage.getItem("data_user"));
  // const client = axios.create({
  //   baseURL: `http://localhost:8081/api/v1/event/`,
  // });

  // client.interceptors.request.use((config) => {
  //   config.headers.Authorization = `bearer ${a.token}`;
  //   return config;
  // });

  // useEffect(() => {
  //   try {
  //     client.post("/user").then((response) => {
  //       console.log(response.data);
  //       setEvents(response.data);
  //     });
  //   } catch (error) {
  //     console.log("error in getAllEvents: \n", error);
  //   }
  // }, []);
  // const myEvent = events.filter((data) =>
  //   data.hosts.some((hosts) => hosts.user_id === a.data._id)
  // );
  // const mySubscribed = events.filter((data) =>
  //   data.guests.some((guests) => guests.user_id === a.data._id)
  // );

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
        </div>

        <Grid templateColumns="repeat(3, 1fr)" gap={5} mb={"30px"}>
          <Box
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
              src={a.data.avatar}
              alt={a.data.avatar}
              borderRadius={"50%"}
            />
            <Heading
              as="h2"
              style={{ fontSize: "18px" }}
              mb={"4px"}
              mt={"12px"}
            >
              {a.data.name}
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
          <Box
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
              src={
                "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=48,height=48/avatars-default/community_avatar_11.png"
              }
              alt={"cover"}
              borderRadius={"14%"}
            />
            <Heading
              as="h2"
              style={{ fontSize: "18px" }}
              mb={"4px"}
              mt={"12px"}
            >
              Calendar
            </Heading>
            <Text color={"#828384"}>No Subscribers</Text>
            <Flex color="white" mt={"16px"}>
              <Center>
                <Image
                  boxSize="16px"
                  objectFit="cover"
                  src={a.data.avatar}
                  alt={a.data.avatar}
                  borderRadius={"50%"}
                />
              </Center>
              <Center>
                <Text
                  color={"#828384"}
                  style={{ textTransform: "lowercase", fontSize: "14px" }}
                >
                  1 Admin
                </Text>
              </Center>
            </Flex>
          </Box>
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
        <Grid templateColumns="repeat(3, 1fr)" gap={5} pb={"30px"} mt={"30px"}>
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
                  backgroundImage: "linear-gradient(180deg, #595959, #4A4A4A)",
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
                  backgroundImage: "linear-gradient(180deg, #595959, #4A4A4A)",
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
        {/* hết Subscribed*/}
        <Box
          w={"100%"}
          h={"170px"}
          backgroundColor={"#1C1E20"}
          borderRadius={"10px"}
          p={"16px"}
        >
          <HStack spacing="24px">
            <Box w={"190px"}>
              <Image
                boxSize="48px"
                objectFit="cover"
                src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=48,height=48/avatars-default/community_avatar_11.png"
                alt="Dan Abramov"
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
                Calendar
              </Heading>
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
            </Box>
            <Box h={"137px"}>
              <Text color={"#828384"}>Upcoming Events</Text>
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
                Friday
              </Heading>
              <Text color={"#828384"}>19:30 Th 3, 13 thg 6</Text>
            </Box>
          </HStack>
        </Box>
      </div>
    </div>
  );
}
