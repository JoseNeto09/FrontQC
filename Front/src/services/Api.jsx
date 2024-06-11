import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

//instance.defaults.headers.common['Authorization'] = localStorage.getItem("Authorization");

export default api;