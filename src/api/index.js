import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL
const token = process.env.REACT_APP_BEARER_TOKEN


const AxiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export default AxiosClient