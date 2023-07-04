import React, { useState } from "react";
import {
  Container,
  Heading,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link as LinkChakra,
  Text,
  Button,
  Flex,
  Wrap,
  Box,
  WrapItem,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProfileSetupModal from "../components/ProfileSetupModal";

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [email, setEmail] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isErrorEmail = !emailRegex.test(email);
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Flex
      w="100vm"
      h="100vh"
      color={"white"}
      bgColor={"rgb(19,21,23)"}
      justifyContent={"center"}
    >
      <Box w="35%" h="100%" bg="#212325" />
      <Container w="65%" h="100%" padding={"91.8px 64px 64px"}>
        <Heading
          as="h3"
          mb={"64px"}
          bg="white"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Sign Up
        </Heading>
        <div
          style={{
            margin: "16px 0px 0px",
          }}
        >
          <FormControl isInvalid={isErrorEmail && email}>
            <FormLabel>Insert your Email</FormLabel>
            <Input
              id="input-email"
              w="400px"
              mb="10px"
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="abc@gmail.com"
            />
            {!isErrorEmail ? (
              <FormHelperText mb="10px">
                Enter the email you'd like to sign in
              </FormHelperText>
            ) : (
              <FormErrorMessage mb="10px">Email is required.</FormErrorMessage>
            )}
          </FormControl>
        </div>
        <Button
          color="black"
          p={"12px 18px"}
          w={400}
          isDisabled={isErrorEmail}
          onClick={onOpen}
        >
          Continue
        </Button>
        <ProfileSetupModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} email={email} />
        <Text mt="16px">
          Already a user?{" "}
          <Link to="/signin">
            <LinkChakra color="#e6658a"> Sign in</LinkChakra>
          </Link>{" "}
          and continue!
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
