import React, { useState } from "react";
import dayjs from "dayjs";
import range from "lodash-es/range";
import {
  Box,
  Button,
  Heading,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const subCalendar = () => {
  //   const lastEventKeys = Object.keys(lastEvent);
  //   let data;
  //   lastEventKeys.forEach((key) => {
  //     if (key === calendar._id) {
  //       data = lastEvent[key];
  //       console.log(data.id);
  //       console.log(data.data);
  //     }
  //   });
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
            {calendar.calendarName} 12322
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
          <Text color={"#828384"}>Up Comming</Text>
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
  );
};
export default subCalendar;
