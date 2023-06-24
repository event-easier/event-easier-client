import React, { useContext } from "react";
import {
  Box,
  chakra,
  Text,
  HStack,
  VStack,
  useColorModeValue,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import EventCardDrawer from "./EventCardDrawer";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const { profileData } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const eventRef = React.useRef();

  const isHost = event.hosts.some((host) => host.user_id === profileData._id);
  const approvedGuest = event.guests.filter((g) => g.status === "APPROVED");

  return (
    <>
      <HStack
        p={{ base: 3, sm: 6 }}
        bg={useColorModeValue("#192123", "#212325")}
        spacing={5}
        rounded="lg"
        cursor="pointer"
        alignItems="flex-start"
        w="640px"
        pos="relative"
        ref={eventRef}
        onClick={onOpen}
      >
        <Box w={"100%"} display="flex" flexDirection="column" gap="0.5rem">
          <Text
            fontSize="sm"
            color="hsla(0,0%,100%,.5)"
            fontWeight="medium"
            style={{
              fontSize: "16px",
            }}
          >
            {new Date(event.start_time).toLocaleTimeString("en-GB")} -{" "}
            {new Date(event.end_time).toLocaleTimeString("en-GB")}
          </Text>
          <VStack w="100%" spacing={2} mb={3} textAlign="left">
            <chakra.h1
              fontSize="2xl"
              lineHeight={1.2}
              fontWeight="bold"
              w="100%"
            >
              {event.name}
            </chakra.h1>
            <Box w="100%">
              {renderEventType(event, isHost)}
              {!isHost && (
                <Box
                  display="flex"
                  w="100%"
                  alignItems="center"
                  gap="0.5rem"
                  color="hsla(0,0%,100%,.5)"
                >
                  <Box>
                    {event.hosts.map((h) => (
                      <Image
                        w={4}
                        h={4}
                        objectFit="cover"
                        rounded={"full"}
                        src={h.avatar}
                        alt={h.name}
                      />
                    ))}
                  </Box>
                  <Text fontWeight="medium">
                    By{" "}
                    {event.hosts.map((h) => (
                      <span key={name}>{h.name}</span>
                    ))}
                  </Text>
                </Box>
              )}
              {isHost && (
                <Box
                  display="flex"
                  w="100%"
                  alignItems="center"
                  gap="0.5rem"
                  color="hsla(0,0%,100%,.5)"
                >
                  <Box w="16px" h="16px">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        // fill-rule="evenodd"
                        d="M9.75 1a.75.75 0 0 0 0 1.5c1.112 0 1.942.826 1.942 1.99 0 .56-.193.895-.43 1.217l-.107.14c-.103.134-.23.3-.32.443a1.736 1.736 0 0 0-.296.938c0 .77.365 1.297.846 1.65.38.28.86.467 1.236.614l.122.048c.445.176.757.318.969.506.168.149.288.338.288.704a.75.75 0 0 0 1.5 0c0-.808-.313-1.402-.794-1.827-.436-.387-.99-.611-1.41-.778l-.091-.036c-.427-.168-.72-.284-.932-.44-.168-.123-.234-.232-.234-.44 0-.003 0-.01.006-.027a.59.59 0 0 1 .058-.111c.054-.086.107-.155.18-.25.05-.064.11-.141.186-.244.34-.46.723-1.104.723-2.108C13.192 2.522 11.715 1 9.75 1Zm-3.429.75c-2.128 0-3.75 1.622-3.75 3.75 0 1.083.42 1.775.793 2.271.082.11.147.192.203.263.084.107.146.186.208.282.082.127.082.171.082.184 0 .25-.086.388-.292.537-.246.178-.582.308-1.052.49l-.106.042c-.47.183-1.073.424-1.547.836-.518.452-.86 1.084-.86 1.952 0 .68.31 1.224.765 1.623.435.38 1.004.634 1.59.81 1.177.353 2.656.46 3.966.46s2.79-.107 3.966-.46c.587-.176 1.156-.43 1.59-.81.456-.399.766-.942.766-1.623 0-.868-.342-1.5-.86-1.952-.474-.412-1.077-.653-1.547-.836l-.106-.041c-.47-.183-.806-.313-1.052-.49-.206-.15-.292-.288-.292-.538 0-.013 0-.057.081-.184a3.52 3.52 0 0 1 .209-.282c.056-.07.121-.154.203-.263.372-.496.792-1.188.792-2.271 0-2.128-1.621-3.75-3.75-3.75ZM4.071 5.5c0-1.3.95-2.25 2.25-2.25s2.25.95 2.25 2.25c0 .632-.222 1.011-.492 1.371-.034.046-.077.1-.123.16a6.898 6.898 0 0 0-.35.474c-.16.249-.32.58-.32.995 0 .821.396 1.38.913 1.753.413.298.937.5 1.357.661l.136.053c.495.192.857.353 1.106.57.204.178.345.403.345.82 0 .177-.065.33-.253.494-.208.182-.55.357-1.034.502-.967.29-2.273.397-3.535.397-1.26 0-2.567-.107-3.534-.397-.485-.145-.826-.32-1.034-.502-.188-.165-.253-.317-.253-.494 0-.417.14-.642.345-.82.25-.217.611-.378 1.105-.57l.137-.053c.42-.161.944-.363 1.357-.66.517-.375.913-.933.913-1.754 0-.416-.16-.746-.32-.995a6.895 6.895 0 0 0-.35-.474 10.78 10.78 0 0 1-.123-.16c-.27-.36-.493-.74-.493-1.371Z"
                      ></path>
                    </svg>
                  </Box>
                  <Text fontWeight="medium">
                    {approvedGuest.length} Approved Guests
                  </Text>
                </Box>
              )}
            </Box>
          </VStack>
          {isHost ? (
            <Box
              p="4px 10px"
              color="hsla(0,0%,100%,.64)"
              w={"fit-content"}
              m="2px"
              bgColor={"hsla(0,0%,100%,.08)"}
              fontSize={"14px"}
              fontWeight="bold"
              rounded={"lg"}
              _hover={{
                backgroundColor: "#fff2",
                color: "#fff",
              }}
            >
              <Link
                to={`/event/manage/${event._id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Manage Event</span>
                <svg
                  width={14}
                  height={14}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </Box>
          ) : (
            <Box p="2px 7px" bg={"#07a460"} rounded="base" w="fit-content">
              <Text fontSize={12} fontWeight="semibold">
                Going
              </Text>
            </Box>
          )}
        </Box>
        <Image
          maxW={200}
          h={100}
          src={event.cover}
          alt={event.name}
          borderRadius="0.5rem"
        />
      </HStack>
      {isOpen && (
        <EventCardDrawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={eventRef}
          event={event}
        />
      )}
    </>
  );
}

function renderEventType(event, isHost = false) {
  const { event_type, location } = event.type;

  switch (event_type) {
    case "IN_PERSON":
      return (
        <Box w="100%">
          <Box
            display="flex"
            w="100%"
            alignItems="center"
            gap="0.5rem"
            color="hsla(0,0%,100%,.5)"
          >
            <Box w="16px" h="16px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854Z"></path>
                  <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                </g>
              </svg>
            </Box>
            <Text fontWeight="medium">{location}</Text>
          </Box>
        </Box>
      );
    case "VIRTUAL":
      return null;
    case "ZOOM":
      return (
        <Box
          display="flex"
          w="100%"
          alignItems="center"
          gap="0.5rem"
          color="hsla(0,0%,100%,.5)"
        >
          <Box w="16px" h="16px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m11.139 6.606 2.384-1.951a.904.904 0 0 1 1.477.7l-.009 5.322a.904.904 0 0 1-1.477.696l-2.375-1.951m-.003 1.21c.059 1.326-1.012 2.448-2.391 2.505-.102.004-5.054-.006-5.054-.006-1.373.104-2.574-.882-2.683-2.204-.008-.099-.006-5.413-.006-5.413-.06-1.328 1.009-2.452 2.389-2.511.103-.005 5.049.004 5.049.004 1.38-.102 2.584.891 2.691 2.22.007.095.005 5.404.005 5.404Z"
              ></path>
            </svg>
          </Box>
          <Text fontWeight="medium">Zoom</Text>
        </Box>
      );
    default:
      return null;
  }
}
