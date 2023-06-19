import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Text, Input, Heading, InputGroup, InputLeftElement, Checkbox, InputRightElement, FormLabel, FormHelperText, FormControl } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CalendarIcon, CheckIcon, ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'

export default function CreateEvent() {
  const [eventCreated, setEventCreated] = useState(
    {
      name: "",
      type: {
        event_type: "IN_PERSON",
        location: "Ho Chi Minh, Vietnam",
      },
      cover:
        "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=960,height=480/event-defaults/b3.jpg",
      start_time: 0,
      end_time: 0,
      require_approve: false,
      hosts: [],
      guests: [],
    }
  );

  const handleNameChange = (e) => {
    setEventCreated({
      ...eventCreated,
      name: e.target.value,
    })
  }

  const handleTypePropsChange = (type) => {
    setEventCreated({
      ...eventCreated,
      type: type,
    })
  }

  const handleCoverChange = (e) => {
    setEventCreated({
      ...eventCreated,
      cover: e.target.value,
    })
  }

  const handleStartTimeChange = (e) => {
    setEventCreated({
      ...eventCreated,
      start_time: e.target.value,
    })
  }

  const handleEndTimeChange = (e) => {
    setEventCreated({
      ...eventCreated,
      end_time: e.target.value,
    })
  }

  const handleApprovalChange = (e) => {
    setEventCreated({
      ...eventCreated,
      require_approve: e.target.checked,
    })
  }

  const handleHostsChange = (host) => {
    setEventCreated({
      ...eventCreated,
      hosts: e.target.value,
    })
  }

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <FormControl isRequired>
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
                  fontSize={"38px"}
                  onChange={handleNameChange}
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
                  <Heading
                    as="b"
                    fontSize={"1.2rem"}
                    color={"#3787ff"}
                    m="1rem 0px 1rem -4px"

                  > Where is the event take place?</Heading>
                  <div
                    style={{
                      margin: "16px 0 16px"
                    }}>
                    <Tabs variant={"unstyled"}
                      alignContent={"center"}
                      isFitted
                    >
                      <TabList
                        backgroundColor={"hsla(0,0%,100%,.08)"}
                        color="#535557"
                        padding="0.25rem"
                        maxW="380px"
                      >
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          In-Person
                        </Tab>
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Zoom
                        </Tab>
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Virtual
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <div>
                            <FormLabel> Event location </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <SearchIcon />
                              </InputLeftElement>
                              <Input placeholder="What's the address?" maxW="500px"
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    event_type: "IN_PERSON",
                                    location: e.target.value
                                  })
                                }
                              />
                            </InputGroup>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div maxW="1000px">
                            <Text
                              m="0 0 16px"
                            >
                              Once you link your Zoom account, we can automatically generate Zoom meetings for you.
                            </Text>
                            <Button
                              background={"#2D8CFF"}
                              padding={"10px 14px"}
                              color="white"
                            >
                              <ExternalLinkIcon /> Link Zoom Account
                            </Button>
                            <div
                              style={{
                                margin: "24px 0 8px",
                                padding: "0 0 4px"
                              }}
                            >
                              <Text>Or you can enter the meeting information: </Text>
                            </div>
                            <div>
                              <FormLabel
                                mt="16px"
                              >Zoom Meeting URL</FormLabel>
                              <Input
                                maxW={"320px"}
                                placeholder="https://zoom.us/j/555555555"
                                padding={"10px 14px"}
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    ...eventCreated.type,
                                    event_type: "ZOOM",
                                    zoom_url: e.target.value
                                  })
                                }
                              />
                              <FormHelperText>
                                The URL for guests to join the Zoom.
                              </FormHelperText>
                              <FormLabel
                                mt="16px"
                              >Zoom meeting ID</FormLabel>
                              <Input
                                maxW={"320px"}
                                placeholder="123456789"
                                padding={"10px 14px"}
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    ...eventCreated.type,
                                    event_type: "ZOOM",
                                    zoom_id: e.target.value
                                  })
                                }
                              />
                              <FormHelperText>
                                The meeting ID you got from Zoom.
                              </FormHelperText>
                              <FormLabel
                                mt="16px"
                              >Zoom Meeting Password</FormLabel>
                              <Input
                                maxW={"320px"}
                                placeholder="0000000"
                                padding={"10px 14px"}
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    ...eventCreated.type,
                                    event_type: "ZOOM",
                                    zoom_password: e.target.value
                                  })
                                }
                              />
                              <FormHelperText>
                                If your meeting has an password, enter it here.
                              </FormHelperText>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div>
                            <FormLabel> Event URL </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <ExternalLinkIcon />
                              </InputLeftElement>
                              <Input
                                placeholder="Where is the event taking place?"
                                maxW="500px"
                                onChange={(e) =>
                                  handleTypePropsChange({
                                    ...eventCreated.type,
                                    event_type: "VIRTUAL",
                                    event_url: e.target.value
                                  })
                                }
                              />
                            </InputGroup>
                            <FormHelperText>Google Meet, Twitch, Youtube, Discord, wherever it is.</FormHelperText>
                          </div>
                        </TabPanel>
                      </TabPanels>
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
                  <Heading
                    as="b"
                    fontSize={"1.2rem"}
                    color={"#ff5965"}
                    m="1rem 0px 1rem -4px"

                  > When will it happen?</Heading>
                  <div
                    style={{
                      margin: "16px 0 16px"
                    }}>
                    <Tabs variant={"unstyled"}
                      alignContent={"center"}
                      isFitted
                    >
                      <TabList
                        backgroundColor={"hsla(0,0%,100%,.08)"}
                        color="#535557"
                        padding="0.25rem"
                        maxW="380px"
                      >
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Single Event
                        </Tab>
                        <Tab
                          style={{
                            borderColor: "white",
                            borderRadius: "0.25rem",
                            padding: "4px 12px",
                            // width: "126px",
                            border: 0,
                          }}
                          _selected={{
                            color: "black",
                            bg: "white",
                          }}
                          __hover={{
                            color: "white"
                          }}
                        >
                          Event Series
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <div>
                            <FormLabel mt="24px"> Start Time </FormLabel>
                            <InputGroup color={"white"}>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <CalendarIcon />
                              </InputLeftElement>
                              <Input type='datetime-local' maxW="500px"
                                onChange={handleStartTimeChange}
                              />
                            </InputGroup>

                            <FormLabel mt="24px"> End Time </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                              >
                                <CalendarIcon />
                              </InputLeftElement>
                              <Input size="md" type='datetime-local' maxW="500px"
                                color="white"
                                onChange={handleEndTimeChange}
                              />
                            </InputGroup>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div maxW="1000px">

                          </div>
                        </TabPanel>
                      </TabPanels>
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
                  <Heading
                    as="b"
                    fontSize={"1.2rem"}
                    color={"#47c97e"}
                    m="1rem 0px 1rem -4px"

                  > Access</Heading>
                  <div>
                    <Checkbox padding={"2px"}
                      onChange={(e) => {
                        handleApprovalChange(e)
                      }
                      }
                    >
                      <Text fontSize="16px" m="0px 0px 2px 8px"> Require Registration Approval</Text>
                      <Text fontSize={"14px"} m="0px 0px 0px 8px" color="#939597"> If selected, only approved guests will receive a ticket. </Text>
                    </Checkbox>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    paddingTop: "1.5rem !important",
                    paddingBottom: "1.5rem !important"
                  }}>
                  <Button color="black" maxW={"200px"} mt="1.5rem"
                    onClick={() => {
                      console.log(eventCreated)
                    }}
                  >
                    Create Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormControl>

    </div>
  )
}
