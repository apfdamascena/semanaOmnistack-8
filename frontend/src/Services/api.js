import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:2608"
});

export default API;