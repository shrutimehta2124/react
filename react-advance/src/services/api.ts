import axios from 'axios';

const API_URL = 'http://localhost:5000/users'; // JSON Server URL

export const addUserToAPI = async (userData: any) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
