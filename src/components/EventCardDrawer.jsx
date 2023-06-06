import React from 'react'
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
} from '@chakra-ui/react'
import { CalendarIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import "../index.css"

export default function EventCardDrawer({ isOpen, onOpen, onClose, finalFocusRef }) {
    return (
        <Box
            className="box-disable-overflow"
        >
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={finalFocusRef}
                size={"lg"}
            >
                <DrawerOverlay />
                <DrawerContent
                    backgroundColor={"rgb(19,21,23)"}
                >
                    <DrawerCloseButton />
                    <DrawerHeader
                        width={"100%"}
                        pos="fixed" top={"0!important"} zIndex={2}
                        backdropFilter={"blur(15px)"}
                        color="white"
                    >
                        <Button variant='outline' mr={3}>
                            Copy link
                        </Button>
                        <Button variant={'outline'} mr={5}>
                            Open Event Page
                        </Button>
                    </DrawerHeader>
                    <DrawerBody>
                        <Card
                            w='100%'
                            backgroundColor={"#212325"}
                            color="white"
                            // margin="0.75rem"
                            marginTop="4rem"
                        >
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading >Event Name</Heading>
                                    <Box
                                        display={"flex"}
                                        flexDirection={"row"}
                                    >
                                        <Avatar size={"sm"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' mr={".5rem"} />
                                        <Text size='sm'> Hosted by Segun Adebayo</Text>
                                    </Box>
                                    <Box>
                                        <Flex
                                            direction={"row"}
                                            alignContent={"center"}
                                            alignItems={"center"}
                                        >
                                            <CalendarIcon
                                                boxSize={6}
                                                m="0.5rem" />
                                            <Box
                                                m="0.5rem"
                                            >
                                                <Text> Friday, May 12</Text>
                                                <Text>12:30 PM to 1:30 PM</Text>
                                            </Box>
                                        </Flex>

                                    </Box>
                                    <Box>
                                        <Flex
                                            direction={"row"}
                                            alignContent={"center"}
                                            alignItems={"center"}
                                        >
                                            <InfoOutlineIcon
                                                boxSize={6}
                                                m="0.5rem" />
                                            <Box
                                                m="0.5rem"
                                            >
                                                <Text> Ho Chi Minh City</Text>
                                                <Text>Ho Chi Minh City, Ho Chi Minh City</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Flex
                                    direction={"row"}
                                    alignContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Text m="0.5rem"> You are the manager of this event. </Text>
                                    <Button
                                        alignSelf={"flex-end"}
                                        color="hsla(0,0%,100%,.64)"
                                        p="7px 10px"
                                        w={170}
                                        m="0.5rem"
                                        bgColor={"rgb(19,21,23)"}
                                    >Manage Event</Button>
                                </Flex>

                            </CardFooter>
                        </Card>
                        <Card
                            w='100%'
                            backgroundColor={"#212325"}
                            color="white"
                            // margin="0.75rem"
                            marginTop="1rem"
                        >
                            <CardHeader>
                                <Heading size='lg'>Registration</Heading>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box>
                                        <Heading size='md' textTransform='uppercase'>
                                            <CalendarIcon mr="1rem" />
                                            No Upcoming Session
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            This series has no upcoming sessions scheduled. Heard something is coming? Check back later!                                    </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card
                            w='100%'
                            backgroundColor={"#212325"}
                            color="white"
                            // margin="0.75rem"
                            marginTop="1rem"
                        >
                            <CardHeader>
                                <Heading size='lg'>Location</Heading>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Text>
                                    With Chakra UI, I wanted to sync the speed of development with the speed
                                    of design. I wanted the developer to be just as excited as the designer to
                                    create a screen.
                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Chakra UI'
                            />
                        </Card>
                        <Card
                            w='100%'
                            backgroundColor={"#212325"}
                            color="white"
                            // margin="0.75rem"
                            marginTop="1rem"
                        >
                            <CardHeader>
                                <Heading size='lg'>Host</Heading>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Stack spacing='4'>
                                    <Box
                                        display={"flex"}
                                        flexDirection={"row"}
                                    >
                                        <Avatar size={"sm"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' mr={".5rem"} />
                                        <Text size='sm'>Segun Adebayo</Text>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        flexDirection={"row"}
                                    >
                                        <Avatar size={"sm"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' mr={".5rem"} />
                                        <Text size='sm'>Segun Adebayo</Text>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        flexDirection={"row"}
                                    >
                                        <Avatar size={"sm"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' mr={".5rem"} />
                                        <Text size='sm'>Segun Adebayo</Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
