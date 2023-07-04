import axios from "axios";

const client = axios.create({
  // baseURL: `https://event-easier-staging.onrender.com/api/v1/event`,
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/event`,
  // baseURL: `http://localhost:8081/api/v1/event`,
});

export const createEvent = async (input) => {
  try {
    await client
      .post("/create", input, {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("profile-data")).token,
        },
      })
      .then((response) => {
        console.log("Create Event successfully");
        return response;
      });
  } catch (error) {
    console.log("error in createEvent \n", error);
  }
};

export const getAllEvents = async (input) => {
  try {
    // console.log("Token: ",JSON.parse(localStorage.getItem("profile-data")).token);
    const result = await client
      .get("/user", {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("profile-data")).token,
        },
      })
      .then((response) => {
        console.log("get all events successfully");
        return response.data;
      });
    return result;
  } catch (error) {
    console.log("error in getAllEvents: \n", error);
  }
};

export const findOne = async (input) => {
  
  try {
    const result = await client.get(`/user/${input}`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("profile-data")).token,
      },
    }).then((response) => {
      console.log("Get One Event successfully");
      return response.data.data;
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log("error in findOne \n", error);
  }
};

export const updateById = async (input) => {
  try {
    const result = await client
      .post(`/update/${input._id}`, input, {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("profile-data")).token,
        },
      })
      .then((response) => {
        console.log(response);
      });
    return result;
  } catch (error) {
    console.log("error in updateById \n", error);
  }
};
