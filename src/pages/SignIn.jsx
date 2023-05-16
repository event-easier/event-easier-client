import React, { useState } from 'react'
import {
  Container, Heading, Tab, TabList, TabPanel, Tabs, TabPanels, Input, Link, Text, Button, Flex, Wrap, Box, WrapItem, FormControl,
  FormErrorMessage,
  FormHelperText, FormLabel
} from '@chakra-ui/react'
import { GoogleAuthProvider } from 'firebase/auth';
import { handleGoogleLogin } from '../services/firebase/authentication';
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();

export default function SignIn() {
  const navigate = useNavigate();
  const [input, setInput] = useState('')

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  const isErrorEmail = !emailRegex.test(input)
  const isErrorPhoneNumber = !phoneNumberRegex.test(input)
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <Flex
      w='100vm'
      h="100vh"
      color={"white"}
      bgColor={"black"}
      justifyContent={"center"}
    >
      <Box
        w='35%'
        h='100%'
        p="64px"
        bg="radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)"
      ></Box>
      <Container
        w='65%'
        h='100%'
        padding={"91.8px 64px 64px"}>
        <Heading
          as="h3"
          mb={"64px"}
          bg="radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)"
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >Sign In</Heading>
        <Tabs
          w={400}
          variant={'enclosed'}
        >
          <TabList>
            <Tab
              style={{
                borderTopRightRadius: '0',
                borderColor: "white"
              }}
              _selected={{
                color: 'black',
                bg: 'white',
              }}
            >Email</Tab>
            <Tab
              style={{
                borderTopLeftRadius: '0',
                borderColor: "white"
              }}
              _selected={{
                color: 'black',
                bg: 'white',
              }}
            >Phone number</Tab>
          </TabList>
          <TabPanels>
            <TabPanel pl={0}>
              <div>
                <FormControl isInvalid={isErrorEmail}>
                  <FormLabel>Insert your Email</FormLabel>
                  <Input
                    id='input-email'
                    w="400px"
                    type='email'
                    value={input}
                    onChange={handleInputChange}
                    placeholder='abc@gmail.com'
                  />
                  {!isErrorEmail ? (
                    <FormHelperText>
                      Enter the email you'd like to sign in
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
              </div>
              <Button
                color="black"
                p={"12px 18px"}
                w={400}
                isDisabled={isErrorEmail}
                onClick={() => {
                  console.log(input)
                }}
              > Continue
              </Button>
            </TabPanel>

            <TabPanel pl={0}>
              <div>
                <FormControl isInvalid={isErrorPhoneNumber}>
                  <FormLabel>Insert your phone number</FormLabel>
                  <Input
                    id='input-phone-number'
                    w="400px"
                    type='number'
                    value={input}
                    onChange={handleInputChange}
                    placeholder='2323232255'
                  />
                  {!isErrorPhoneNumber ? (
                    <FormHelperText>
                      Enter the phone number you'd like to sign in
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Phone number is required.</FormErrorMessage>
                  )}
                </FormControl>
              </div>
              <Button
                color="black"
                p={"12px 18px"}
                w={400}
                isDisabled={isErrorPhoneNumber}
                onClick={() => {
                  console.log(input)
                }}
              > Continue
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text mt="16px">New to Event Easier? <Link href='/signup' color="#7928CA">Sign up</Link> for free.</Text>
        <Container
          w={400}
          padding={"96px 0px 0px"}
        >
          <Text
            m="0px 0px 16px"
          >
            Or Sign In With
          </Text>
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
              >Google</Button>
            </WrapItem>
            <WrapItem>
              <Button
                color="hsla(0,0%,100%,.64)"
                p="8px 16px"
                w={190}
                m="2px"
                bgColor={"#212325"}
              >Facebook</Button>
            </WrapItem>
          </Wrap>
        </Container>
      </Container>
    </Flex>
  )
}
