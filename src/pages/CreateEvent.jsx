import React from 'react'
import Navbar from '../components/Navbar'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Text, Input } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function CreateEvent() {
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
          maxWidth: "820px",
          blockSize: "border-box",
          margin: "0px auto 0px auto",
          padding: "100px 16px 0px",
        }}
      >
        <Image src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=960,height=480/event-defaults/b3.jpg"
          maxW="820px"
          maxH="410px"

        />
        <Button> Change Cover Photo </Button>
        <div
          className="create-event-container"
        >
          <div
            style={{
              maxWidth: "820px",
              blockSize: "border-box",
              margin: "0 auto",
              padding: "16px"
            }}
          >
            <div
              className='event-name-input'
              style={{
                maxWidth: "650px",
                padding: "0 0 16px"
              }}
            >
              <Text
                as="b"
                color={"#3787ff"}
                fontSize={"14px"}
                fontStyle={"bold"}> Event Name </Text>
              <Input
                height={"57px!important"}
                p="8px 0"
                variant='flushed' placeholder='My Cooking Show'
                _placeholder={{
                  fontSize: "38px",
                  fontWeight: "bold"
                }}
              />
            </div>
            <div
              style={{
                paddingLeft: "1rem !important",
                paddingRight: "1rem !important",
                margin: "0 auto",
                maxWidth: "820px",
                blockSize: "border-box"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  paddingBottom: "1.5rem !important"
                }}>
                <Text
                  as="b"
                  fontSize={"1.2rem"}
                  color={"#3787ff"}
                  m="1rem 0px 1rem -4px"
                  
                > Where is the event take place?</Text>
                <div
                style={{
                  margin: "16px 0 16px"
                }}>
                  <Tabs variant={"unstyled"}
                    backgroundColor={"hsla(0,0%,100%,.08)"}
                    padding="0.25rem"
                    maxW="auto"
                    borderRadius={"0.5rem"}
                  >
                    <TabList>
                      <Tab
                        style={{
                          borderColor: "white",
                          borderRadius: "0.25rem"
                        }}
                        _selected={{
                          color: "black",
                          bg: "white",
                        }}
                      >
                        In-Person
                      </Tab>
                      <Tab
                        style={{
                          borderColor: "white",
                          borderRadius: "0.25rem"
                        }}
                        _selected={{
                          color: "black",
                          bg: "white",
                        }}
                      >
                        Zoom
                      </Tab>
                      <Tab
                        style={{
                          borderColor: "white",
                          borderRadius: "0.25rem"
                        }}
                        _selected={{
                          color: "black",
                          bg: "white",
                        }}
                      >
                        Virtual
                      </Tab>
                    </TabList>
                  </Tabs>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  paddingBottom: "1.5rem !important"
                }}>

              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  paddingBottom: "1.5rem !important"
                }}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
