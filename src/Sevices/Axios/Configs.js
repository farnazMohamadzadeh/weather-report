import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

export default apiRequests;
