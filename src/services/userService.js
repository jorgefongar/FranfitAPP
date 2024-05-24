import axios from 'axios';

const API_URL = 'http://localhost:5000/users/';

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post(API_URL + 'add', user);
  return response.data;
};
