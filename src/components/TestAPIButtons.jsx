import { Button } from '@chakra-ui/react'
import React from 'react'
import { createEvent, getAllEvents, findOne, updateById } from "../services/events";

export default function TestAPIButtons({ events, checkEventTime, upcoming_events, past_events }) {

    return (
        <div>
            <Button color={"black"} onClick={() => {
                const id = JSON.parse(localStorage.getItem('profile-data'))?.data?.data?._id
                console.log(id)
                getAllEvents({
                    user_id: id
                })
            }}> Call API getAllEvents</Button>

            <Button color={"black"} onClick={() => {
                const user_profile = JSON.parse(localStorage.getItem('profile-data'))?.data?.data
                console.log(user_profile)
                const creator_host = {
                    user_id: user_profile._id,
                    name: user_profile.name,
                    gmail: user_profile.email,
                    avatar: user_profile.avatar
                }
                createEvent({
                    name: "This is a test UPCOMING event",
                    type: {
                        event_type: "IN_PERSON",
                        location: "Ho Chi Minh, Vietnam"
                    },
                    cover: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=960,height=480/event-defaults/b3.jpg",
                    start_time: 2796588034443,
                    end_time: 3804848514123,
                    require_approve: false,
                    hosts: [
                        creator_host
                    ],
                    guests: [
                        creator_host
                    ]
                })
            }}> Call API createEvent </Button>
            <Button color={"black"} onClick={() => {
                const user_profile = JSON.parse(localStorage.getItem('profile-data'))?.data?.data
                console.log(user_profile)
                const creator_host = {
                    user_id: user_profile._id,
                    name: user_profile.name,
                    gmail: user_profile.email,
                    avatar: user_profile.avatar
                }
                findOne(
                    {
                        _id: '646cc164bee633392912a363'
                    })
            }}> Call API findOne </Button>
            <Button color={"black"} onClick={() => {
                const user_profile = JSON.parse(localStorage.getItem('profile-data'))?.data?.data
                console.log(user_profile)
                const creator_host = {
                    user_id: user_profile._id,
                    name: user_profile.name,
                    gmail: user_profile.email,
                    avatar: user_profile.avatar
                }
                updateById({
                    _id: "6481f50e7d5f4eb1b691c9cd",
                    name: "This is a test event from Khanh yay",
                    type: {
                        event_type: "IN_PERSON",
                        location: "Ho Chi Minh, Vietnam"
                    },
                    cover: "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=960,height=480/event-defaults/b3.jpg",
                    start_time: 1696588034443,
                    end_time: 1704848514123,
                    require_approve: false,
                    hosts: [
                        creator_host
                    ],
                    guests: [
                        creator_host
                    ]
                })
            }}> Call API updateById </Button>
            <Button color={"black"} onClick={() => {
                console.log(events)
            }}> Test useEffect Result (Events) </Button>
            <Button color={"black"} onClick={() => {
                console.log("Date.now: ", Date.now())
                console.log("Upcoming events \n", upcoming_events)
                console.log("Past events \n", past_events)
            }}> Test Sorting (Upcoming vs. Past) </Button>
        </div>
    )
}
