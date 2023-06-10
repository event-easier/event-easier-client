import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Image, Stack, Button, Icon, Divider, Box } from '@chakra-ui/react';

export default function ProfileEventCard({ title, icon, date }) {
    return (
        <Card
            position={"relative"}
            direction="row"
            alignItems={"center"}
            variant='filled'
            p={"-0.25rem -0.5rem"}
            m={"0.25rem 0.5rem"}
            bgColor={""}
            color="white"
            _hover={{
                background: "rgba(18, 139, 251, 0.1)",
                opacity: 1,
                transition: "all 0.3s cubic-bezier(0,4,0,0,2,1)"
            }}
            onClick={() => {alert("You clicked")}}
        >   
            <Box
                borderRadius={"0.25rem"}
                m={"1rem 2rem"}
                
            >
                June
                <Divider orientation='horizontal' />
                23rd
            </Box>
            <Image
                objectFit='cover'
                w="160px"
                h="80px"
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                borderRadius={"0.25rem"}
            />
            <Stack
                display={"flex"}
                alignItems={"center"}
                pl="1rem"
            >
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {date}
                    </Text>
                </CardBody>
                <CardFooter>
                </CardFooter>
            </Stack>
        </Card>
    )
}
