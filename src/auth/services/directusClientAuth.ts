import axios from 'axios';

const API_URL = 'http://localhost:8055';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Error al iniciar sesión: ' + error.message);
  }
};
