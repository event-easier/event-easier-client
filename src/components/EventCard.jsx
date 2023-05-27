import React from 'react'
import {
    Box,
    chakra,
    Link,
    Text,
    HStack,
    VStack,
    useColorModeValue,
    Image,
    Button
} from '@chakra-ui/react';

export default function EventCard({ title, categories, description, icon, date }) {
    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.600', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
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
        >
            <Image boxSize={100} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Box>
                <Text fontSize="sm">{date}</Text>
                <HStack spacing={2} mb={1}>
                    {categories.map((cat) => (
                        <Text color={"green.200"} fontSize="sm" key={cat}>
                            {cat}
                        </Text>
                    ))}
                </HStack>
                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1
                        fontSize="2xl"
                        lineHeight={1.2}
                        fontWeight="bold"
                        w="100%"
                    >
                        {title}
                    </chakra.h1>
                    <Text fontSize="md" noOfLines={2}>
                        {description}
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
        </HStack>
    )
}