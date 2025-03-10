import axios from 'axios';

// Load the base URL from environment variables
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
