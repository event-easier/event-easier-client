import React from "react";
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
  TabIndicator,
} from "@chakra-ui/react";
import CalendarCardDrawer from "../components/CalendarCardDrawer";
import { useContext } from "react";
import { BlockPicker, ChromePicker } from "react-color";
import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
export default function CalendarsManager() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(19,21,23)",
        minHeight: "100vh",
        paddingBottom: "64px",
      }}
    >
      <Navbar style={{ zIndex: 2 }} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          blockSize: "border-box",
          margin: "0px auto 0px auto",
          padding: "150px 16px 0px",
        }}
      >
        <Box>
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            w={"28px"}
            h={"28px"}
            display={"inline-block"}
          />
        </Box>
        <Box mt={"10px"}>
          <Tabs variant={"unstyled"}>
            <TabList>
              <ReactLink to={"/calendars-manager"}>
                {" "}
                <Tab>One</Tab>
              </ReactLink>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <hr style={{ border: " 1px solid #252729" }} />
            <TabPanels>
              {" "}
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
      <Button
        opacity={"60%"}
        bg={"#4E4F4F"}
        color={"#BFBFBF"}
        position={"absolute"}
        top={"150px"}
        right={"200px"}
        _hover={{ bg: "#BCBCBC", color: "#131517" }}
        textAlign={"right"}
        display={"inline-block"}
        zIndex={13}
        float={"right"}
      >
        Calendar Page
      </Button>
    </div>
  );
}
