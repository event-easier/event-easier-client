import React from "react";
import Navbar from "../components/Navbar";
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
  Grid,
  Center,
  Box,
} from "@chakra-ui/react";
export default function Calendars() {
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
        {/* sau đổ dử liệu vào đây */}
        <Grid templateColumns="repeat(3, 1fr)" gap={5} mb={"30px"}>
          <Box
            p={"15px"}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            pb={"20px"}
          >
            {" "}
            <Image
              boxSize="48px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius={"50%"}
            />
            <Heading as="h2" size="md" mb={"4px"} mt={"12px"}>
              Trung
            </Heading>
            <Text color={"#828384"}> 2 Subscribers</Text>
            <Text mt={"16px"} color={"#828384"}>
              {" "}
              2 Personal
            </Text>
          </Box>
        </Grid>
        {/*  */}
        <hr style={{ border: " 1px solid #252729" }} />
        {/*  */}
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
            p={"15px"}
            maxW="sm"
            border={"1px solid #252729"}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            pb={"20px"}
          >
            <Image
              boxSize="32px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius={"5px"}
              display={"inline-block"}
            />
            <Heading
              color={"#828384"}
              as="h2"
              display={"inline"}
              ml={"5px"}
              size="md"
              position={"relative"}
              bottom={"8px"}
            >
              {" "}
              Tech Events
            </Heading>
          </Box>
        </Grid>
        {/*  */}
        <hr style={{ border: " 1px solid #252729" }} />
        {/*  */}
        <Heading
          as="h2"
          size="md"
          mb={"4px"}
          mt={"12px"}
          display={"inline-block"}
        >
          Subscribed Calendars
        </Heading>
        {/*  */}
        <Box
          p={"15px"}
          maxW="sm"
          border={"1px solid #252729"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          pb={"20px"}
        >
          {" "}
          <Image
            boxSize="48px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius={"50%"}
          />
          <Heading as="h2" size="md" mb={"4px"} mt={"12px"}>
            Trung
          </Heading>
          <Text color={"#828384"}> 2 Subscribers</Text>
          <Text mt={"16px"} color={"#828384"}>
            {" "}
            2 Personal
          </Text>
        </Box>
      </div>
    </div>
  );
}
