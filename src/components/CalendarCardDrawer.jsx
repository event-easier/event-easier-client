import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
  StackDivider,
  Box,
  Flex,
  Avatar,
  Input,
} from "@chakra-ui/react";
import { CalendarIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import "../index.css";
import { CalendarContext } from "../context/CalendarProvider";
import { useContext } from "react";

export default function CalendarCardDrawer() {
  const {
    isOpen,
    onOpen,
    onClose,
    calendarRef,
    setBackground,
    imgBackground,
    handleUploadImage,
    valueColor,
    setUpLoadCover,
  } = useContext(CalendarContext);

  const handleChangeBackground = (calendar) => {
    setUpLoadCover(false);
    setBackground(calendar);
  };
  return (
    <Box className="box-disable-overflow">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={calendarRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"rgba(33,35,37, .96)"}>
          <DrawerHeader
            py={"8px"}
            px={"12px"}
            width={"100%"}
            pos="fixed"
            top={"0!important"}
            zIndex={2}
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
              <Button
                backdropFilter={"blur(10px)"}
                mr={10}
                color={"hsla(0,0%,100%,.64)"}
                bg="transparent"
                border={`1px solid #333537`}
                _hover={{
                  bg: "hsla(0,0%,100%,.64)",
                  color: "rgb(19,21,23)",
                }}
              >
                Upload File
                <Input
                  name={"cover-image"}
                  type="file"
                  w={"100%"}
                  position={"absolute"}
                  opacity={"0%"}
                  onChange={handleUploadImage}
                />
              </Button>
            </div>
          </DrawerHeader>
          <DrawerBody pt={"50px"} color={"white"}>
            {imgBackground.map((calendar) => (
              <Box
                bg={"#333537"}
                _hover={{ bg: "#434547" }}
                borderRadius={"10px "}
                height={"100px"}
                m={"20px"}
                zIndex={2}
                name="cover"
                onClick={() => handleChangeBackground(calendar)}
              >
                <Box
                  height={"100px"}
                  cursor={"pointer"}
                  style={{
                    width: "100%",
                    backgroundColor: valueColor,
                    WebkitMaskImage: "url(" + calendar + ")",
                  }}
                ></Box>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
