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
  FormHelperText,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  useDisclosure,
  AlertDescription,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { BlockPicker, ChromePicker } from "react-color";
import axios from "axios";
import CalendarCardDrawer2 from "../components/CalendarCardDrawer2";
import { useContext } from "react";

import { Link as ReactLink, useNavigate } from "react-router-dom";
export default function CalendarSettings(calendars) {
  let a = JSON.parse(localStorage.getItem("profile-data"));

  const { isOpen, onOpen, onClose } = useDisclosure();
  const client = axios.create({
    // baseURL: `http://localhost:8081/api/v1/calendar/`,
    baseURL: "https://event-easier-staging.onrender.com/api/v1/",
    // baseURL: `https://event-easier-client-934bfbbxs-x-career.vercel.app/`,
  });

  client.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${a.token}`;
    return config;
  });
  const imgBackground = [
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=716.8/calendar-defaults/patterns/diamonds-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/dots-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/metaballs-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/rain-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/squares-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/stairs-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/waves-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/perlin-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/grid-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/warp-100.png",
  ];

  const radioOptions = [
    { value: "#D2D4D7", bgColor: "#D2D4D7" },
    { value: "#E6658A", bgColor: "#E6658A" },
    { value: "#CC62D5", bgColor: "#CC62D5" },
    { value: "#B596FF", bgColor: "#B596FF" },
    { value: "#3787FF", bgColor: "#3787FF" },
    { value: "#47C97E", bgColor: "#47C97E" },
    { value: "#FBD85B", bgColor: "#FBD85B" },
    { value: "#FF9641", bgColor: "#FF9641" },
    { value: "#FF5965", bgColor: "#FF5965" },
  ];
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [valueColor, setValueColor] = useState(calendars.calendars.color);
  const colorPickerRef = useRef(null);
  const calendarRef = React.useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [upLoadCover, setUpLoadCover] = useState(false);
  const [error, setError] = useState(null);
  const [background, setBackground] = useState(calendars.calendars.cover);
  const [avatar, setAvatar] = useState(calendars.calendars.avatar);
  const [formData, setFormData] = useState({
    type: "ADMIN",
    cover: calendars.calendars.cover,
    avatar: calendars.calendars.avatar,
    calendarName: calendars.calendars.calendarName,
    description: calendars.calendars.description,
    color: calendars.calendars.color,
    url: "",
  });
  console.log("213", calendars.calendars);
  const handleRadioClick = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };
  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  const handleChangedata = (e) => {
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    if (e.target.name === "url") {
      if (!alphanumericRegex.test(e.target.value)) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsInvalid(true);
        }, 2000);
      } else {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsInvalid(false);
        }, 2000);
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadImage = (e) => {
    if (e.target.name === "avata-image") {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
    if (e.target.name === "cover-image") {
      const file = e.target.files[0];
      setUpLoadCover(true);
      setBackground(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault("");
    console.log("formData", formData);
    try {
      await client
        .post(`/calendar/update/${calendars.calendars._id}`, formData)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const isInArray = imgBackground.includes(background);
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        paddingBottom: "64px",
      }}
    >
      <div
        style={{
          blockSize: "border-box",
          margin: "0px auto 0px auto",
        }}
      >
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
                backgroundColor: "red",
                backgroundColor: "#1C1E20",
                borderRadius: "10px",
              }}
            >
              <Heading as={"h3"} fontSize={"18px"}>
                Customization
              </Heading>
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
                      children="event-easier/"
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
            </div>
            <Button
              mt={4}
              bg={"#FFFFFF"}
              color={"#131517"}
              isDisabled={isInvalid}
              type="submit"
            >
              <p>Save Changes</p>
            </Button>
          </FormControl>
        </form>
        <CalendarCardDrawer2
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          calendarRef={calendarRef}
          setBackground={setBackground}
          imgBackground={imgBackground}
          handleUploadImage={handleUploadImage}
          valueColor={valueColor}
          setUpLoadCover={setUpLoadCover}
        />
      </div>
    </div>
  );
}
