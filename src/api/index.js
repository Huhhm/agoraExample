import axios from "axios";
import { SERVER_URL } from "../constants/constant";

const api = axios.create({
    baseURL: SERVER_URL,
    headers: { 
        "Accept": 'application/json',
    },
});
export default api;