const axios = require('axios');

const getUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

const createUser = async (data) => {
  const response = await axios.post(`/api/user`, data);
  return response.data;
};

const getBrands = async () => {
  const response = await axios.get(`/api/get-brands`);
  return response.data;
};

export { createUser, getUsers, getBrands };
