import React from 'react'
import Navbar from '../components/Navbar'
import { Avatar, Box, Button, Heading, Text } from '@chakra-ui/react'
import ProfileEventCard from '../components/ProfileEventCard'
import { useState } from 'react'

export default function UserProfile() {
  const [openPast, setOpenPast] = useState(false)
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
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
          <Heading m="16px 0px">Nguyen Kieu Bao Khanh</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vitae facilisis tellus. Proin ut lorem tellus.
          </Text>
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
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
        <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
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
          <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
          <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
          <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
          <ProfileEventCard title={"Morning Exercises"} date={"Sat, Jun 24, 12:30 PM - 1:30 PM GMT+7"} />
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
