const axios = require('axios');

const getBrands = async () => {
  const response = await axios.get(`/api/get-brands`);
  return response.data;
};

export { getBrands };
