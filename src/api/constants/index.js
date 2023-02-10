import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

// axios instance
export const INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 25000
});
