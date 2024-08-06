import axios from 'axios';

const API_BASE_URL = 'http://localhost:8055';

export const getRevisiones = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items/revisiones`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching revisiones:', error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
