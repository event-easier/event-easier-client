import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function CalendarsDetail() {
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
      <div
        style={{
          height: "300px",
          zIndex: 3,
          backgroundColor: "red",
          WebkitMaskImage:
            "url(https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=716.8/calendar-defaults/patterns/diamonds-100.png)",
        }}
      ></div>
      <Box>
        <Box
          bgGradient="linear(to-b, red, rgb(19,21,23))"
          opacity={0.1}
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
              borderRadius={"10px"}
              bgImg={
                "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=47,height=47/avatars-default/community_avatar_5.png"
              }
            ></Box>
            <Button
              colorScheme="red"
              variant="outline"
              float={"right"}
              _hover={{ bg: "red", color: "white", border: "0px " }}
            >
              Button
            </Button>
          </Box>
          <Heading
            as="h2"
            style={{ fontSize: "36px" }}
            mb={"0px"}
            mt={"0px"}
            position={"relative"}
          >
            2312
          </Heading>
          <Heading
            position={"relative"}
            as="h3"
            style={{ fontSize: "16px", color: "#CBCBCB" }}
            mb={"0px"}
            mt={"10px"}
          >
            2312
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
                p="0px"
                w={"110px"}
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
                  Add Event
                </div>
              </Button>
            </GridItem>

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
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
