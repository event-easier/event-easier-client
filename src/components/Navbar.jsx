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
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, CalendarIcon, StarIcon } from '@chakra-ui/icons';
import { GoogleSignOut } from '../services/firebase/authentication';
import { useNavigate } from 'react-router';
import React, { useContext } from 'react';
import AuthProvider from '../context/AuthProvider';

const Links = [
  {
    name: 'Events',
    link: "/home",
    icon: <StarIcon />
  },
  {
    name: 'Calendars',
    link: "/home/calendars",
    icon: <CalendarIcon />
  }
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box width="100%" pos="fixed" top={"0!important"} zIndex={2} backdropFilter={"blur(5px)"}>
      <Box bg="#131517" px={4} opacity={0.85}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color="blue.400">Event Easier</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <div>
                  <Link
                    px={3}
                    py={3}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.200', 'gray.700'),
                      color: "#131517"
                    }}
                    key={link.name} href={link.link}>
                    {link.icon}
                    &nbsp;&nbsp;
                    {link.name}
                  </Link>
                </div>

              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <div style={{
              color: "grey.100"
            }}>{Date().toString().slice(0, 16)}</div>
            <Button
              variant={'solid'}
              colorScheme={'transparent'}
              size={'sm'}
              mr={4}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList bg="#131517">
                <MenuItem bg="#131517">View Profile</MenuItem>
                <MenuItem bg="#131517">Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={async () => {
                  await GoogleSignOut();
                  localStorage.removeItem("profile-data");
                  navigate("/")
                }}
                  bg="#131517">Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  key={link.name} href={link.link}>{link.name}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}