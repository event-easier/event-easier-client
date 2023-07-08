import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Image, Stack, Button, Icon, Divider, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function ProfileEventCard({ event }) {
    const navigate = useNavigate()
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
            onClick={() => {
                navigate(`/event/${event._id}`)
            }}
        >
            {/* <Box
                borderRadius={"0.25rem"}
                m={"1rem 2rem"}

            >
                {new Date(event.start_time).toString().slice(3, 7)}
                <Divider orientation='horizontal' />
                {new Date(event.start_time).toString().slice(8, 10)}

            </Box> */}
            <div
                className="jsx-3384225975 calendar-card text-center full-height flex-shrink-0"
                style={{
                    marginRight: "30px"
                }}
            >
                <div
                    className="jsx-3384225975 month"

                >
                    Thg {new Date(event?.start_time ?? "today").toLocaleDateString("en-GB").slice(3, 5) ?? "Loading"}
                </div>
                <div
                    className="jsx-3384225975 day"

                >
                    {new Date(event?.start_time ?? "today").toLocaleDateString("en-GB").slice(0, 2) ?? "Loading"}
                </div>
            </div>
            <Image
                objectFit='cover'
                w="160px"
                h="80px"
                src={event.cover}
                alt='Caffe Latte'
                borderRadius={"0.25rem"}
            />
            <Stack
                display={"flex"}
                alignItems={"center"}
                pl="1rem"
            >
                <CardBody>
                    <Heading size='md'>{event.name}</Heading>
                    <Text
                        color="hsla(0,0%,100%,.64)"
                    >
                        {new Date(event.start_time).toLocaleDateString("en-GB")}
                    </Text>
                </CardBody>
                <CardFooter>
                </CardFooter>
            </Stack>
        </Card>
    )
}
