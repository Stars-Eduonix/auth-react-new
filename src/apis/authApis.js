import axios from "axios";


// instance of authApi

const authApi = axios.create({
    baseURL: "http://localhost:5000/api/auth"
    
})

export default authApi;