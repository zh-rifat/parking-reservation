import axios from "axios";

// axios.defaults.baseURL="http://localhost:5000";
const backendUri=import.meta.env.VITE_BACKEND_API;
console.log(backendUri)
const instance = axios.create({
    // baseURL: "http://localhost:3000/api"
    baseURL: backendUri
  });
  
export default instance;
