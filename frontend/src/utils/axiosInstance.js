import axios from "axios";
// axios.defaults.baseURL="http://localhost:5000";
const instance = axios.create({
    // baseURL: "http://localhost:3000/api"
    baseURL:process.env.REACT_APP_BACKEND_API
  });
  
export default instance;
