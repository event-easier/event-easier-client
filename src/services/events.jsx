import axios from "axios";

const client = axios.create({
    baseURL: `https://event-easier-staging.onrender.com/api/v1/event`,
});

export const createEvent = async (input) => {
    try {
        await client
            .post("/create", {
                "name": input.name,
                "type": input.type, //event_type, location
                "cover": input.cover,
                "start_time": input.start_time,
                "end_time": input.end_time,
                "require_approve": input.require_approve,
                "hosts": input.hosts,
                "guests": input.guests,
                "__v": input?.__v
            })
    } catch (error) {
        console.log("error in createEvent \n", error);
    }
}

export const getAllEvents = async (input) => {
    try {
        await client
            .post("/user", {
                "user_id": input.user_id
            }).then((response) => {
                console.log(response)
            })
    } catch (error) {
        console.log("error in getAllEvents: \n", error);
    }
}

export const findOne = async (input) => {
    try {
        await client
            .get("/:id").then((response) => {
                console.log(response)
            })
    } catch (error) {
        console.log("error in findOne \n", error)
    }
}

export const updateById = async (input) => {
    try {
        await client
            .post("/update/:id", input).then((response) => {
                console.log(response)
            })
    } catch (error) {
        console.log("error in updateById \n", error);
    }
}