import React from 'react'
import {
    Box,
    chakra,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';
export default function LineWithDot({ event_time }) {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                pos="absolute"
                left={"50%"}
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.500', 'gray.800')}
                top="0px"
            >
            </chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid #131517"
                    backgroundImage="none"
                    opacity={1}
                >
                </Box>
            </Box>
        </Flex>
    )
}
