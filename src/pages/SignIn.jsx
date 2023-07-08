import React, { useState } from "react";
import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
  Input,
  Link as LinkChakra,
  Text,
  Button,
  Flex,
  Wrap,
  Box,
  WrapItem,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import {
  LoginByEmail,
  handleGoogleLogin,
} from "../services/firebase/authentication";
import { useNavigate } from "react-router-dom";
import CodeAlertDialog from "../components/CodeAlertDialog";

const googleProvider = new GoogleAuthProvider();

export default function SignIn() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneNumberRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  const isErrorEmail = !emailRegex.test(input);
  const isErrorPhoneNumber = !phoneNumberRegex.test(input);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Flex
      w="100vm"
      h="100vh"
      color={"white"}
      bgColor={"rgb(19,21,23)"}
      justifyContent={"center"}
    >
      <Box w="35%" h="100%" p="64px" bg="#212325" />
      <Container w="65%" h="100%" padding={"91.8px 64px 64px"}>
        <Heading
          as="h3"
          mb={"64px"}
          bg="white"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Sign In
        </Heading>
        <Tabs w={400} variant={"enclosed"}>
          <TabList>
            <Tab
              style={{
                borderTopRightRadius: "0",
                borderColor: "white",
              }}
              _selected={{
                color: "black",
                bg: "white",
              }}
            >
              Email
            </Tab>
            <Tab
              style={{
                borderTopLeftRadius: "0",
                borderColor: "white",
              }}
              _selected={{
                color: "black",
                bg: "white",
              }}
            >
              Phone number
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel pl={0}>
              <div>
                <FormControl isInvalid={isErrorEmail && input}>
                  <FormLabel>Insert your Email</FormLabel>
                  <Input
                    id="input-email"
                    w="400px"
                    mb="10px"
                    type="email"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="abc@gmail.com"
                  />
                  {!isErrorEmail ? (
                    <FormHelperText mb="10px">
                      Enter the email you'd like to sign in
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage mb="10px">
                      Email is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
              </div>
              <Button
                color="black"
                p={"12px 18px"}
                w={400}
                isDisabled={isErrorEmail}
                onClick={async () => {
                  const res = await LoginByEmail(input);
                  !res ? <div>There's something wrong.</div> : onOpen();
                }}
              >
                {" "}
                Continue
              </Button>
            </TabPanel>
            <TabPanel pl={0}>
              <div>
                <FormControl isInvalid={isErrorPhoneNumber && input}>
                  <FormLabel>Insert your phone number</FormLabel>
                  <Input
                    id="input-phone-number"
                    w="400px"
                    mb="10px"
                    type="number"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="2323232255"
                  />
                  {!isErrorPhoneNumber ? (
                    <FormHelperText mb="10px">
                      Enter the phone number you'd like to sign in
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage mb="10px">
                      Phone number is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
              </div>
              <Button
                color="black"
                p={"12px 18px"}
                w={400}
                isDisabled={isErrorPhoneNumber}
                onClick={() => {
                  console.log(input);
                }}
              >
                {" "}
                Continue
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CodeAlertDialog
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          cancelRef={cancelRef}
          email={input}
        />
        <Text mt="16px">
          New to Event Easier?{" "}
          <Link to="/signup">
            <LinkChakra color="#e6658a">Sign up</LinkChakra>
          </Link>{" "}
          for free.
        </Text>
        <Container padding={"96px 0px 0px"}>
          <Text m="0px 0px 16px">Or Sign In With</Text>
          <Wrap>
            <WrapItem>
              <Button
                color="hsla(0,0%,100%,.64)"
                p="8px 16px"
                w={190}
                m="2px"
                bgColor={"#212325"}
                onClick={() => {
                  handleGoogleLogin(googleProvider);
                }}
              >
                Google
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                color="hsla(0,0%,100%,.64)"
                p="8px 16px"
                w={190}
                m="2px"
                bgColor={"#212325"}
              >
                Facebook
              </Button>
            </WrapItem>
          </Wrap>
        </Container>
      </Container>
    </Flex>
  );
}
