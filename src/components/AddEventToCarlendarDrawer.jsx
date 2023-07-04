import {
  Box,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Card,
  CardBody,
  Stack,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function AddEventToCarlendarDrawer({
  isOpen,
  onOpen,
  onClose,
  finalFocusRef,
}) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size={"md"}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor={"#1C1E1F"}>
        <DrawerHeader
          py={"8px"}
          px={"12px"}
          width={"100%"}
          pos="fixed"
          top={"0!important"}
          zIndex={2}
          backdropFilter={"blur(15px)"}
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
          </div>
        </DrawerHeader>
        <DrawerBody px={"12px"}>
          <Card
            w="100%"
            backgroundColor={"transparent"}
            color="white"
            marginTop="4rem"
          >
            <Heading fontSize={"18px"}>I'm a Heading</Heading>
            <Button bg="#303131" mt={"20px"} mb={"20px"}>
              Create
            </Button>
            <hr style={{ border: "1px solid #303131" }} />
            <Button bg="#303131" mt={"20px"} mb={"20px"}>
              Create
            </Button>
            <Button bg="#303131" mt={"0px"} mb={"20px"}>
              Create
            </Button>
          </Card>{" "}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
