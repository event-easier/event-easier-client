import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Image,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Text,
  CardHeader,
  Box,
  Flex,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { CalendarIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import "../index.css";

export default function EventCardDrawer({
  isOpen,
  onOpen,
  onClose,
  finalFocusRef,
  event,
}) {
  return (
    <Box className="box-disable-overflow">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={finalFocusRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"rgba(33,35,37, .8)"}>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  mr={3}
                  bg={"hsla(0,0%,100%,.08)"}
                  color={"hsla(0,0%,100%,.64)"}
                  p={"7px 10px"}
                  fontSize={14}
                  display={"flex"}
                  gap={"6px"}
                  maxHeight={"30px"}
                  _hover={{
                    bg: "hsla(0,0%,100%,.64)",
                    color: "rgb(19,21,23)",
                  }}
                  onClick={() => {navigator.clipboard.writeText(
                    `${import.meta.env.VITE_BASE_URL}/event/${event._id}`
                  )}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                  >
                    <rect
                      width="13"
                      height="13"
                      x="9"
                      y="9"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy link
                </Button>
                <Button
                  color={"hsla(0,0%,100%,.64)"}
                  bg={"hsla(0,0%,100%,.08)"}
                  p={"7px 10px"}
                  maxHeight={"30px"}
                  fontSize={14}
                  _hover={{
                    bg: "hsla(0,0%,100%,.64)",
                    color: "rgb(19,21,23)",
                  }}
                >
                  <Link
                    href={`/event/${event._id}`}
                    target="_blank"
                    textDecoration="none"
                  >
                    Open Event Page
                  </Link>
                </Button>
              </div>
            </div>
          </DrawerHeader>
          <DrawerBody px={"12px"}>
            <Card
              w="100%"
              backgroundColor={"#212325"}
              color="white"
              marginTop="4rem"
            >
              <CardBody>
                <Image src={event.cover} alt={event.name} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading>{event.name}</Heading>
                  <Box display={"flex"} flexDirection={"row"}>
                    <Avatar
                      size={"sm"}
                      name="Segun Adebayo"
                      src={event.hosts[0].avatar}
                      mr={".5rem"}
                    />
                    <Text size="sm"> Hosted by {event.hosts[0].name}</Text>
                  </Box>
                  <Box>
                    <Flex
                      direction={"row"}
                      alignContent={"center"}
                      alignItems={"center"}
                    >
                      <CalendarIcon boxSize={6} m="0.5rem" />
                      <Box m="0.5rem">
                        <Text>
                          {new Date(event.start_time).toLocaleDateString(
                            "en-GB"
                          )}{" "}
                          to{" "}
                          {new Date(event.end_time).toLocaleDateString("en-GB")}
                        </Text>
                        <Text>
                          {new Date(event.start_time).toLocaleTimeString(
                            "en-US"
                          )}{" "}
                          to{" "}
                          {new Date(event.end_time).toLocaleTimeString("en-US")}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      direction={"row"}
                      alignContent={"center"}
                      alignItems={"center"}
                    >
                      <InfoOutlineIcon boxSize={6} m="0.5rem" />
                      <Box m="0.5rem">
                        <Text>{event.type.location}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex
                  direction={"row"}
                  alignContent={"center"}
                  alignItems={"center"}
                >
                  <Text m="0.5rem"> You are the manager of this event. </Text>
                  <Button
                    alignSelf={"flex-end"}
                    color="hsla(0,0%,100%,.64)"
                    p="7px 10px"
                    w={170}
                    m="0.5rem"
                    bgColor={"rgb(19,21,23)"}
                  >
                    Manage Event
                  </Button>
                </Flex>
              </CardFooter>
            </Card>
            <Card
              w="100%"
              backgroundColor={"#212325"}
              color="white"
              // margin="0.75rem"
              marginTop="1rem"
            >
              <CardHeader>
                <Heading size="lg">Location</Heading>
              </CardHeader>
              <Divider />
              <CardBody>
              </CardBody>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />
            </Card>
            <Card
              w="100%"
              backgroundColor={"#212325"}
              color="white"
              // margin="0.75rem"
              marginTop="1rem"
            >
              <CardHeader>
                <Heading size="lg">Host</Heading>
              </CardHeader>
              <Divider />
              <CardBody>
                <Stack spacing="4">
                  {event.hosts.map((host, index) => {
                    return (
                      <Box display={"flex"} flexDirection={"row"} key={index}>
                        <Avatar
                          size={"sm"}
                          name={host.name}
                          src={host.avatar}
                          mr={".5rem"}
                        />
                        <Text size="sm">{host.name}</Text>
                      </Box>
                    );
                  })}
                </Stack>
              </CardBody>
            </Card>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
