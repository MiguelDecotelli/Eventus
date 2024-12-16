import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3333";

export default axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});
