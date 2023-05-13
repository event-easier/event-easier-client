import { Container, Heading, Tab, TabList, TabPanel, Tabs, TabPanels, Input, Link, Text, Button, Flex, TabIndicator } from '@chakra-ui/react'
import React from 'react'

export default function SignIn() {
  return (
    <Flex
      maxW='100vm'
      h={"100vh"}
      color={"white"}
      bgColor={"black"}
    >
      <div
        style={{
          width: "35%",
          backgroundColor: "#212325"
        }}
      >
        My logo here
      </div>
      <Container
        w='65%'
        padding={"91.8px 64px 64px"}>
        <Heading
          as="h3"
          size="4xl"
          mb={"64px"}
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
                Insert your email:
                <Input
                  w={400}
                  placeholder="abc@gmail.com"
                  size="md"
                />
              </div>
            </TabPanel>
            <TabPanel pl={0}>
              <div>
                Insert your phone number:
                <Input
                  w={400}
                  placeholder="(+84) 021 323 2333"
                  size="md"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button
          color="black"
          p={"12px 18px"}
          w={400}
        > Continue </Button>

        <Text mt="16px">New to Event Easier? <Link>Sign up</Link> for free.</Text>
        <Container
          w={400}
          padding={"96px 0px 0px"}
        >
          <Text
            m="0px 0px 16px"
          >
            Or Sign In With
          </Text>
          <div>
            <Button
              color="hsla(0,0%,100%,.64)"
              p="8px 16px"
              w={194}
              m="2px"
              bgColor={"#212325"}
            >Google</Button>
            <Button
              color="hsla(0,0%,100%,.64)"
              p="8px 16px"
              w={194}
              m="2px"
              bgColor={"#212325"}
            >Facebook</Button>
          </div>
        </Container>
      </Container>
    </Flex>
  )
}
