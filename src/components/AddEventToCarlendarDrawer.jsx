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
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  CardBody,
  Stack,
  Collapse,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function AddEventToCarlendarDrawer({
  isOpen,
  onOpen,
  onClose,
  finalFocusRef,
}) {
  const { isOpen: Open1, onToggle: onToggle1 } = useDisclosure();
  const { isOpen: Open2, onToggle: onToggle2 } = useDisclosure();
  const navigate = useNavigate();
  const handleOnClick = () => {};
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
                <Input placeholder="https://event-easier-client-934bfbbxs-x-career.vercel.app/" />
                <Button
                  bg="#FFFFFF"
                  mt={"20px"}
                  mb={"20px"}
                  w={"100%"}
                  color={"#131517"}
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
