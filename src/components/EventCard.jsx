import React, { useState } from 'react'
import {
    Box,
    chakra,
    Text,
    HStack,
    VStack,
    useColorModeValue,
    Image,
    Button,
    useDisclosure
} from '@chakra-ui/react';
import EventCardDrawer from './EventCardDrawer';

export default function EventCard({ event }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const eventRef = React.useRef()
    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('#192123', '#212325')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            w="640px"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#1a202c', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: '15px 15px 15px 0',
                position: 'absolute',
                left: '-15px',
                display: 'block'
            }}
            ref={eventRef}
            onClick={onOpen}
        >
            <Image boxSize={100} src={event.cover} alt={event.name} />
            <Box>
                <Text fontSize="sm" color="#DFAC00">
                    {new Date(event.start_time).toLocaleDateString('en-GB')} - {new Date(event.end_time).toLocaleDateString('en-GB')}
                </Text>
                <VStack w="100%" spacing={2} mb={3} textAlign="left">
                    <chakra.h1
                        fontSize="2xl"
                        lineHeight={1.2}
                        fontWeight="bold"
                        w="100%"
                    >
                        {event.name}
                    </chakra.h1>
                    <Text w="100%" fontSize="md" noOfLines={2} >
                        {event.type.event_type}
                    </Text>
                </VStack>
                <Button
                    color="hsla(0,0%,100%,.64)"
                    p="7px 10px"
                    w={170}
                    m="2px"
                    bgColor={"#212325"}
                >Manage Event</Button>
            </Box>
            <EventCardDrawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={eventRef}
                event={event}
            />
        </HStack>
    )
}
