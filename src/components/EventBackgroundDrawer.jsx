import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Image,
    Card,
    CardBody,
    Heading,
    Divider,
    Text,
    CardHeader,
    Box,
} from "@chakra-ui/react";
import "../index.css";

let cover_images = [
    {
        id: 1,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,dpr=2,quality=80/event-defaults/b4.jpg"
    },
    {
        id: 2,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,dpr=2,quality=80/event-defaults/b3.jpg"
    },
    {
        id: 3,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,dpr=2,quality=80/event-defaults/b5.jpg"
    },
    {
        id: 4,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,dpr=2,quality=80/event-defaults/b5.jpg"
    },
    {
        id: 5,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,quality=80/event-defaults/peace-1.webp"
    },
    {
        id: 6,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/birthday-1.webp"
    },
    {
        id: 7,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/dj-1.webp"
    },
    {
        id: 8,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/dinner-1.webp"
    },
    {
        id: 9,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/invite-flowers-1.webp"
    },
    {
        id: 10,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/dj-2.webp"
    },
    {
        id: 11,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/library-1.webp"
    },
    {
        id: 12,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/nature-mountain-1.webp"
    },
    {
        id: 13,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/sports-1.webp"
    },
    {
        id: 14,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/sports-2.webp"
    },
    {
        id: 15,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/sports-3.webp"
    },
    {
        id: 16,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/meeting-1.webp"
    },
    {
        id: 17,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/work-1.webp"
    },
    {
        id: 18,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/corporate-1.webp"
    },
    {
        id: 19,
        src: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80/event-defaults/dinner-2.webp"
    }
]

export default function EventBackgroundDrawer({
    isOpen,
    onOpen,
    onClose,
    finalFocusRef,
    handleCoverChange
}) {

    const handleChooseCover = (src) => {
        console.log("Update cover successful.")
        handleCoverChange(src)
        onClose()
    }
    return (
        <Box className="box-disable-overflow">
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={finalFocusRef}
                size={"lg"}
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor={"rgba(33,35,37, .8)"}>
                    <DrawerHeader
                        py={"8px"}
                        px={"12px"}
                        width={"100%"}
                        pos="fixed"
                        top={"0!important"}
                        zIndex={2}
                        backdropFilter={"blur(15px)"}
                        borderBottom={"1px solid hsla(0,0%,100%,.08)"}
                        color="white"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button
                                onClick={onClose}
                                p={"0.4375rem"}
                                maxHeight={"30px"}
                                bg="transparent"
                                color={"hsla(0,0%,100%,.64)"}
                                _hover={{
                                    bg: "hsla(0,0%,100%,.64)",
                                    color: "rgb(19,21,23)",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width={21}
                                    height={21}
                                >
                                    <path d="m13 17 5-5-5-5M6 17l5-5-5-5"></path>
                                </svg>
                            </Button>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                            </div>
                        </div>
                    </DrawerHeader>
                    <DrawerBody px={"12px"}>
                        <Card
                            w="100%"
                            backgroundColor={"#212325"}
                            color="white"
                            marginTop="4rem"
                        >
                            <CardHeader>
                                <Heading size="lg">Available Images</Heading>
                                <Text>You can choose the following images: </Text>
                            </CardHeader>
                            <CardBody>
                                <div
                                    style={{
                                        display: "grid",
                                        gap: "0.5rem",
                                        gridTemplateColumns: "1fr 1fr 1fr"
                                    }}
                                >

                                    {
                                        cover_images.map((image) => {
                                            return (
                                                <Box
                                                    maxW={"162px"}
                                                    maxH={"81px"}
                                                >
                                                    <Image
                                                        key={image.id}
                                                        src={image.src}
                                                        w="100%"
                                                        h="100%"
                                                        borderRadius={"0.5rem"}
                                                        onClick={() => {
                                                            console.log("Set cover successful.")
                                                            handleCoverChange(image.src)
                                                            onClose()
                                                        }}
                                                    />
                                                </Box>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </CardBody>
                            <Divider />
                        </Card>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
