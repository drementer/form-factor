const axios = require('axios');

export const getUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

export const createUser = async (data) => {
  const response = await axios.post(`/api/user`, data);
  return response.data;
};
