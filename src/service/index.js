const axios = require('axios');

const getBrands = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/brand/get-brands',
  });

  return response.data;
};

export { getBrands };
