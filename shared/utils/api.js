// shared/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Update with your actual API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
    },
});

export default api;
