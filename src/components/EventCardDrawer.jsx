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
    ButtonGroup,
    Text,
    CardHeader,
    StackDivider,
    Box,
    Flex,
    Avatar,
    IconButton
} from '@chakra-ui/react'

export default function EventCardDrawer({ isOpen, onOpen, onClose, finalFocusRef }) {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={finalFocusRef}
            size={"md"}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader
                    pos="fixed" top={"0!important"} zIndex={2}
                    backdropFilter={"blur(5px)"}
                >
                    <Button variant='outline' mr={3}>
                        Copy link
                    </Button>
                    <Button variant={'outline'} mr={5}>
                        Open Event Page
                    </Button>
                </DrawerHeader>
                <DrawerBody>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>Client Report</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        Summary
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        Overview
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        Check out the overview of your clients.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        Analysis
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        See a detailed analysis of all your business clients.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                    <Box>
                                        <Heading size='sm'>Segun Adebayo</Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                />
                            </Flex>
                        </CardHeader>
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
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
