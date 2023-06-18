import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  CalendarIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { GoogleSignOut } from "../services/firebase/authentication";
import { useNavigate } from "react-router";
import React from "react";

const Links = [
  {
    name: "Events",
    link: "/home",
    icon: <StarIcon />,
  },
  {
    name: "Calendars",
    link: "/home/calendars",
    icon: <CalendarIcon />,
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      pos="fixed"
      top={"0!important"}
      zIndex={3}
      backdropFilter={"blur(5px)"}
    >
      <div
        className="jsx-2931876464 background animated mounted"
        style={{
          position: "fixed",
          top: "0px",
          width: "100%",
          height: "100px",
          zIndex: 1,
          background:
            "linear-gradient(rgba(22, 31, 243, 0.2) 0%, rgba(18, 139, 251, 0.1) 50%, rgba(0, 140, 115, 0) 100%)",
        }}
      />
      <Box
        opacity={0.85}
        py="0.75rem"
        px="1rem"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color={"black"}
            opacity={"75%"}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* <Box color="blue.400">Event Easier</Box> */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, idx) => (
                <div key={idx}>
                  <ReactLink to={link.link}>
                    <Link
                      rounded={"md"}
                      display={"flex"}
                      color={"hsla(0,0%,100%,.5)"}
                      fontSize={14}
                      fontWeight={500}
                      alignItems={"center"}
                      _hover={{
                        color: "white",
                      }}
                    >
                      {link.icon}
                      &nbsp;&nbsp;
                      {link.name}
                    </Link>
                  </ReactLink>
                </div>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <div
              style={{
                color: "hsla(0,0%,100%,.5)",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {Date().toString().slice(0, 16)}
            </div>
            <Button
              variant={"solid"}
              colorScheme={"transparent"}
              color={"white"}
              size={"sm"}
              mr={4}
              onClick={() => {
                navigate("/create-event")
              }}
            >
              Create Event
            </Button>
            {/* <Button
              variant={'solid'}
              colorScheme={'blue'}
              size={'sm'}
              mr={4}
              onClick={GoogleSignOut}
            >
              Sign Out
            </Button> */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={JSON.parse(localStorage.getItem("profile-data")).avatar}
                />
              </MenuButton>
              <MenuList bg="#131517">
                <MenuItem
                  bg="#131517"
                  onClick={() => {
                    navigate("/user/:uid/profile");
                  }}
                >
                  View Profile
                </MenuItem>
                <MenuItem bg="#131517">Settings</MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    GoogleSignOut();
                    navigate("/");
                  }}
                  bg="#131517"
                >
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  key={link.name}
                  href={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
