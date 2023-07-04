import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Heading,
  Select,
  extendTheme,
  ChakraProvider,
  Button,
  Input,
  RadioGroup,
  Radio,
  InputGroup,
  InputLeftAddon,
  Grid,
  Circle,
  Modal,
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  FormHelperText,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { BlockPicker, ChromePicker } from "react-color";

import CalendarCardDrawer from "../components/CalendarCardDrawer";
import { CalendarContext } from "../context/CalendarProvider";
import { useContext } from "react";
export default function CreateCalendar() {
  const {
    handleUploadImage,
    handleSubmit,
    handleChangedata,
    imgBackground,
    radioOptions,
    selectedColor,
    setSelectedColor,
    error,
    showColorPicker,
    setShowColorPicker,
    valueColor,
    setValueColor,
    colorPickerRef,
    calendarRef,
    isLoading,
    isInvalid,
    setIsLoading,
    background,
    setBackground,
    avatar,
    setAvatar,
    formData,
    setFormData,
    isOpen,
    onOpen,
    onClose,
    handleRadioClick,
    handleColorChange,
    handleClickOutside,
    upLoadCover,
  } = useContext(CalendarContext);

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        paddingBottom: "64px",
      }}
    >
      {error ? (
        <Alert
          status="error"
          bg={"red"}
          w={"400px"}
          position={"fixed"}
          zIndex={12}
          right={"0px"}
          top={"70px"}
          bgGradient="linear(to-r, #ACCCC5, #FF3030)"
          opacity={error ? 1 : 0}
          borderRadius={"10px 0px 0px 10px"}
        >
          <AlertIcon />
          Please enter your information
        </Alert>
      ) : (
        ""
      )}
      <Navbar style={{ zIndex: 1 }} />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1000px",
          blockSize: "border-box",
          margin: "0px auto 0px auto",
          padding: "150px 16px 0px",
        }}
      >
        <Heading pb={"20px"}>Calendars</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#1C1E20",
                borderRadius: "10px",
              }}
            >
              {!upLoadCover ? (
                <Box
                  className="567"
                  bg={"#333537"}
                  _hover={{ bg: "#434547" }}
                  borderRadius={"10px 10px 0px 0px"}
                  height={"157px"}
                  zIndex={2}
                  name="cover"
                  onChange={handleChangedata}
                  value={(formData.cover = background)}
                >
                  <Button
                    bg={"#4E4F4F"}
                    color={"#BFBFBF"}
                    _hover={{ bg: "#BCBCBC", color: "#131517" }}
                    top={"10px"}
                    right={"10px"}
                    textAlign={"right"}
                    display={"inline-block"}
                    zIndex={1}
                    float={"right"}
                    onClick={onOpen}
                  >
                    Change Cover
                  </Button>

                  <Box
                    height={"157px"}
                    zIndex={2}
                    onClick={onOpen}
                    cursor={"pointer"}
                    style={{
                      width: "100%",
                      backgroundColor: valueColor,

                      WebkitMaskImage: "url(" + background + ")",
                    }}
                  ></Box>
                </Box>
              ) : (
                <Box
                  className="123"
                  bg={"#333537"}
                  _hover={{ bg: "#434547" }}
                  borderRadius={"10px 10px 0px 0px"}
                  height={"157px"}
                  zIndex={2}
                  name="cover"
                  onChange={handleChangedata}
                  value={(formData.cover = background)}
                >
                  <Button
                    bg={"#4E4F4F"}
                    color={"#BFBFBF"}
                    _hover={{ bg: "#BCBCBC", color: "#131517" }}
                    top={"10px"}
                    right={"10px"}
                    textAlign={"right"}
                    display={"inline-block"}
                    zIndex={3}
                    float={"right"}
                    onClick={onOpen}
                  >
                    Change Cover
                  </Button>

                  <Box
                    height={"157px"}
                    zIndex={1}
                    onClick={onOpen}
                    cursor={"pointer"}
                    style={{
                      width: "100%",
                      backgroundImage: "url(" + background + ")",
                    }}
                  ></Box>
                </Box>
              )}

              <Box
                border={"2px solid black"}
                w={"64px"}
                h={"64px"}
                bgImg={avatar}
                bgSize="cover"
                cursor={"pointer"}
                position={"relative"}
                top={-9}
                borderRadius={7}
                left={10}
                _hover={{
                  "& > .child-box": {
                    bg: "#E6658A",
                    color: "white",
                  },
                }}
                name="avatar"
                value={(formData.avatar = avatar)}
                onChange={handleChangedata}
              >
                <Input
                  name={"avata-image"}
                  type="file"
                  w={"64px"}
                  h={"64px"}
                  cursor={"pointer"}
                  opacity={"0%"}
                  onChange={handleUploadImage}
                />
                <Box
                  w={"24px"}
                  border={"2px solid black"}
                  h={"24px"}
                  transition={"0.5s"}
                  bg={"white"}
                  color={"black"}
                  textAlign={"center"}
                  position={"absolute"}
                  right={0}
                  bottom={0}
                  borderRadius={7}
                  className="child-box"
                >
                  ↥
                </Box>
              </Box>

              <div style={{ width: "96%", margin: "-25px auto" }}>
                <Input
                  variant="flushed"
                  placeholder="Calendar Name"
                  _placeholder={{ fontSize: "30px", color: "#656668" }}
                  focusBorderColor="white"
                  fontSize="30px"
                  size="lg"
                  name="calendarName"
                  onChange={handleChangedata}
                  value={formData.calendarName}
                />
                <Input
                  variant="unstyled"
                  placeholder="add a short description "
                  mt={"10px"}
                  _placeholder={{ color: "#656668" }}
                  name="description"
                  onChange={handleChangedata}
                  value={formData.description}
                />
              </div>
            </div>
            <div
              style={{
                padding: "20px 10px",
                marginTop: "30px",
                width: "100%",
                height: "300px",
                backgroundColor: "red",
                backgroundColor: "#1C1E20",
                borderRadius: "10px",
              }}
            >
              <Heading as={"h3"} fontSize={"18px"}>
                Customization
              </Heading>
              <Grid templateColumns="repeat(2, 1fr)" gap={20}>
                <Box>
                  <Heading
                    as={"h4"}
                    fontSize={"14px"}
                    mt={"10px"}
                    color={"#BCBEC1"}
                  >
                    Tint Color{" "}
                  </Heading>

                  <RadioGroup
                    mt={"30px"}
                    name="color"
                    value={(formData.color = valueColor)}
                    onChange={(handleChangedata, setValueColor)}
                  >
                    {radioOptions?.map((option) => (
                      <Radio
                        pr={"10px"}
                        style={{ width: "24px", height: "24px" }}
                        value={option.value}
                        className="custom-radio"
                        border={"none"}
                        background={option.bgColor}
                        _checked={{
                          border: "3px double white",
                          bg: option.bgColor,
                          padding: "10px",
                        }}
                        _focus={{
                          boxShadow: `0 10 0 2px 2px double red`,
                          outline: "none",
                        }}
                      ></Radio>
                    ))}

                    <Radio
                      ref={colorPickerRef}
                      style={{ width: "24px", height: "24px" }}
                      value={selectedColor}
                      border={"none"}
                      background={
                        "conic-gradient(from 180deg at 50% 50%, rgb(222, 97, 134) 0deg, rgb(197, 95, 205) 58.12deg, rgb(175, 145, 246) 114.38deg, rgb(53, 130, 245) 168.75deg, rgb(69, 194, 121) 208.13deg, rgb(243, 209, 90) 243.75deg, rgb(247, 145, 62) 285deg, rgb(244, 87, 95) 360deg);"
                      }
                      _checked={{
                        bg: selectedColor,
                        border: "3px double white",
                        padding: "10px",
                      }}
                      _focus={{
                        boxShadow: `0 10 0 2px 2px double red`,
                        outline: "none",
                      }}
                      onClick={handleRadioClick}
                    >
                      {showColorPicker && (
                        <Box
                          position={"absolute"}
                          top={"1px"}
                          float={"left"}
                          zIndex={1}
                        >
                          <BlockPicker
                            styles={{ height: "100px" }}
                            triangle="hide"
                            color={selectedColor}
                            onChange={handleColorChange}
                          />
                        </Box>
                      )}
                    </Radio>
                  </RadioGroup>

                  <Heading
                    as={"h4"}
                    fontSize={"14px"}
                    mt={"30px"}
                    className="HPublic"
                    color={"#BCBEC1"}
                  >
                    Public URL
                  </Heading>
                  <FormControl isInvalid={isInvalid}>
                    <InputGroup mt={"10px"}>
                      <InputLeftAddon
                        children="lu.ma/"
                        bg={"#2E3031"}
                        border={"1px none"}
                      />
                      <Input
                        zIndex={2}
                        name={"url"}
                        onChange={handleChangedata}
                        value={formData.url}
                        border={`1px solid #333537`}
                        focusBorderColor="white"
                      />
                      {isLoading && (
                        <Spinner
                          size="sm"
                          position="absolute"
                          top="50%"
                          right="10px"
                          transform="translateY(-50%)"
                        />
                      )}
                    </InputGroup>
                    {!isInvalid && formData.url ? (
                      <></>
                    ) : (
                      <FormErrorMessage mb="10px">URL is use</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
                <Box>
                  <Heading
                    as={"h4"}
                    fontSize={"14px"}
                    mt={"10px"}
                    mb={"10px"}
                    color={"#BCBEC1"}
                  >
                    Location
                  </Heading>
                  <Box
                    w={"100%"}
                    height={"160px"}
                    scale={100}
                    bg={"black"}
                    padding={"10px"}
                    borderRadius={"12px"}
                    bgImage="url('https://cdn.worlddata.info/pics/map-world.png')"
                    bgSize={"cover"}
                    filter={"brightness(50%)"}
                  >
                    <Tabs variant="soft-rounded">
                      <TabList>
                        <Box bg={"#313131"} p={"3px"} borderRadius={"7px"}>
                          <Tab
                            fontSize={"10px"}
                            borderRadius={"7px"}
                            color={"#969696"}
                            _selected={{ bg: "#4E4E4E", color: "#F6F6F6" }}
                            display={"inline-block"}
                          >
                            City
                          </Tab>
                          <Tab
                            fontSize={"10px"}
                            borderRadius={"7px"}
                            color={"#969696"}
                            _selected={{ bg: "#4E4E4E", color: "#F6F6F6" }}
                            display={"inline-block"}
                          >
                            Global
                          </Tab>
                        </Box>
                      </TabList>
                      <TabPanels>
                        <TabPanel mt={"20px"}>
                          <Box
                            w={"20px"}
                            position={"relative"}
                            bottom={"-30px"}
                            left={"5px"}
                            zIndex={12}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                            >
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

                          <Input
                            type="text"
                            pl={"30px"}
                            bg={"#131517"}
                            placeholder="enter your country"
                          ></Input>
                        </TabPanel>
                        <TabPanel></TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </Box>
              </Grid>
            </div>
            <Button
              mt={4}
              bg={"#FFFFFF"}
              color={"#131517"}
              isDisabled={isInvalid}
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="16px"
                color="#131517"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="M22 4 12 14.01l-3-3"></path>
              </svg>
              <p style={{ paddingLeft: "10px" }}>Create Calendar</p>
            </Button>
          </FormControl>
        </form>
        <CalendarCardDrawer placement="left" />
      </div>
    </div>
  );
}
