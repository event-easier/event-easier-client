import React from "react";
import Navbar from "../components/Navbar";
import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";
import ProfileEventCard from "../components/ProfileEventCard";
import { useState, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
export default function UserProfile() {
  const navigate = useNavigate()
  let { uid } = useParams;
  const { upcomingEvents, pastEvents, fetchEventsData } = useContext(AppContext);
  const { profileData } = useContext(AuthContext);
  console.log("profileData", profileData);
  const [openPast, setOpenPast] = useState(false);
  console.log(upcomingEvents);
  useEffect(() => {
    fetchEventsData()
  }, [])
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        margin: "0px auto 0px auto",
      }}
    >
      <Box pb="5rem"></Box>
      <Navbar />
      <Box
        p="32px 0px 0px"
        bgColor={
          "linear-gradient(rgba(22, 31, 243, 0.2) 0%, rgba(18, 139, 251, 0.1) 50%, rgba(0, 140, 115, 0) 100%)"
        }
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          alignItems={"center"}
          m="0 102.727px"
          p="32px 16px"
        >
          <Avatar size={"xxl"} src={profileData.avatar} />
          <Heading m="16px 0px">{profileData.name}</Heading>
          <Text mb="0.5rem">{profileData.bio}</Text>
          {/* <Button
            color="hsla(0,0%,100%,.64)"
            p="7px 10px"
            w={170}
            m="2px"
            bgColor={"#212325"}
            _hover={{ bgColor: "#1234" }}
          >
            Edit Bio
          </Button> */}
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          maxWidth: "1000px",
          minHeight: "100vh",
          flexDirection: "column",
          margin: "0px auto 0px auto",
          // alignItems: "center",
          blockSize: "border-box",
          alignContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0px 0px 16px",
          }}
        >
          <Heading as="h5" size="lg" justifySelf={"flex-start"}>
            Events
          </Heading>
          <div
            style={{
              justifySelf: "flex-end",
            }}
          >
            <Button
              variant="ghost"
              color={"#DFAC00"}
              _hover={{ color: "#ffcd23" }}
              _focus={{ color: "#ffcd99", backgroundColor: "rgb(19,21,23)" }}
              onClick={() => {
                navigate("/create-event")
              }}
            >
              Create Event
            </Button>
          </div>
        </Box>
        {
          (upcomingEvents.length == 0) ? (
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
              {/* <Button
                colorScheme="blue"
                variant="outline"
                m="24px 48px 0"
                p="0 48px"
              >
                <Text fontWeight="bold">Create Event</Text>
              </Button> */}
            </div>
          ) : (
            upcomingEvents.map((event, index) => {
              return <ProfileEventCard key={index} event={event} />;
            })
          )
        }
        {openPast ? (
          <div>
            <Button
              paddingTop={"50px"}
              variant="ghost"
              color={"#DFAC00"}
              _hover={{ color: "#ffcd23" }}
              _focus={{ color: "#ffcd99", backgroundColor: "rgb(19,21,23)" }}
              onClick={() => {
                setOpenPast(false);
              }}
            >
              View less
            </Button>
            {
              (pastEvents.length == 0) ? (
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
                  {/* <Button
                    colorScheme="blue"
                    variant="outline"
                    m="24px 48px 0"
                    p="0 48px"
                  >
                    <Text fontWeight="bold">Create Event</Text>
                  </Button> */}
                </div>
              ) : (
                pastEvents?.map((event, index) => {
                  return <ProfileEventCard key={index} event={event} />;
                })
              )
            }
          </div>
        ) : (
          <div>
            <Button
              variant="ghost"
              color={"#DFAC00"}
              _hover={{ color: "#ffcd23" }}
              _focus={{ color: "#ffcd99", backgroundColor: "rgb(19,21,23)" }}
              onClick={() => {
                setOpenPast(true);
              }}
            >
              View Past
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
