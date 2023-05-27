import React, { useState } from 'react'
import {
  Container, Heading, FormControl,
  FormErrorMessage,
  FormHelperText, FormLabel, Input, Link, Text, Button, Flex, Wrap, Box, WrapItem
} from '@chakra-ui/react'

export default function SignUp() {
  const [input, setInput] = useState('')
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const isErrorEmail = !emailRegex.test(input)
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
      <Box w='35%' h='100%' bg="radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)"
      >
      </Box>
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
        >Sign Up</Heading>
        <div
          style={{
            margin: "16px 0px 0px"
          }}
        >
          <FormControl isInvalid={isErrorEmail && input}>
            <FormLabel>Insert your Email</FormLabel>
            <Input
              id='input-email'
              w="400px"
              mb="10px"
              type='email'
              value={input}
              onChange={handleInputChange}
              placeholder='abc@gmail.com'
            />
            {!isErrorEmail ? (
              <FormHelperText
                mb="10px"
              >
                Enter the email you'd like to sign in
              </FormHelperText>
            ) : (
              <FormErrorMessage
                mb="10px"
              >Email is required.</FormErrorMessage>
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

        <Text mt="16px">Already a user? <Link href='/signin' color="#7928CA">Sign in</Link> and continue!</Text>
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
