import React from 'react'
import Navbar from '../components/Navbar'
import { Avatar, Box, Button, Heading, Text } from '@chakra-ui/react'
import ProfileEventCard from '../components/ProfileEventCard'
import { useState } from 'react'
import { AppContext } from '../context/AppProvider'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
export default function UserProfile() {
  let { uid } = useParams;
  const { user, events, upcomingEvents, pastEvents } = useContext(AppContext)
  const [openPast, setOpenPast] = useState(false)
  console.log(upcomingEvents)
  // const EditBioModal = () => {

  // }
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
      <Box p="32px 0px 0px" bgColor={"linear-gradient(rgba(22, 31, 243, 0.2) 0%, rgba(18, 139, 251, 0.1) 50%, rgba(0, 140, 115, 0) 100%)"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          alignItems={"center"}

          m="0 102.727px"
          p="32px 16px"
        >
          <Avatar
            size={"xxl"}
            src={user.avatar}
          />
          <Heading m="16px 0px">{user.name}</Heading>
          <Text mb="0.5rem">
            {user.bio}
          </Text>
          <Button
            color="hsla(0,0%,100%,.64)"
            p="7px 10px"
            w={170}
            m="2px"
            bgColor={"#212325"}
            _hover={{ bgColor: "#1234" }}
          >Edit Bio</Button>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          maxWidth: "1000px",
          minHeight: "100vh",
          flexDirection: "column",
          margin: "0px auto 0px auto",
          alignItems: "center",
          blockSize: "border-box",
          alignContent: "center"
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0px 0px 16px",
          }}
        >
          <Heading as="h5" size='lg' justifySelf={"flex-start"}>Events</Heading>
          <div
            style={{
              justifySelf: "flex-end"
            }}
          >
            <Button
              variant="ghost"
              color={"#DFAC00"}
              _hover={{ color: '#ffcd23' }}
              _focus={{ color: '#ffcd99', backgroundColor: "rgb(19,21,23)" }}
            >Create Event</Button>
          </div>
        </Box>
        {/* <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} /> */}
        {upcomingEvents.map((event, index) => {
          return <ProfileEventCard key={index} event={event} />
        })}
        {openPast ? <div>
          <Button
            variant="ghost"
            color={"#DFAC00"}
            _hover={{ color: '#ffcd23' }}
            _focus={{ color: '#ffcd99', backgroundColor: "rgb(19,21,23)" }}
            onClick={() => {
              setOpenPast(false)
            }}
          >View less</Button>
          {pastEvents?.map((event, index) => {
            return <ProfileEventCard key={index} event={event} />
          })}
        </div>
          :
          <div>
            <Button
              variant="ghost"
              color={"#DFAC00"}
              _hover={{ color: '#ffcd23' }}
              _focus={{ color: '#ffcd99', backgroundColor: "rgb(19,21,23)" }}
              onClick={() => {
                setOpenPast(true)
              }}
            >
              View Past
            </Button>
          </div>
        }
      </div>
    </div>
  )
}
