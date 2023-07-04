// import axios from "axios";

// const client = axios.create({
//   baseURL: `http://localhost:8081/api/v1/event/`,
// });

// client.interceptors.request.use((config) => {
//   let a = JSON.parse(localStorage.getItem("data_user"));
//   config.headers.Authorization = `bearer ${a.token}`;
//   return config;
// });

// export const getAllEvents = async () => {
//   try {
//     await client.post("/user").then((response) => {
//       console.log(response.data);
//     });
//   } catch (error) {
//     console.log("error in getAllEvents: \n", error);
//   }
// };
