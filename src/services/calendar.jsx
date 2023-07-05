import axios from "axios";

const client = axios.create({
  // baseURL: `https://event-easier-staging.onrender.com/api/v1/event`,
  // baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/event`,
  baseURL: `http://localhost:8081/api/v1/calendar`,
});

export const getCalendarUser = async () => {
  try {
    await client
      .post("/", {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("data_user")).token,
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
