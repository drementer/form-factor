const axios = require('axios');

const getBrands = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/brand/get-brands',
  });

  return response.data;
};

const addBrand = async (data) => {
  const response = await axios({
    method: 'post',
    url: '/api/brand/add-brand',
    data: data,
  });

  return response.data;
};

const uploadFiles = async (files) => {
  let filesToUpload = new FormData();

  Object.entries(files).forEach((file) => {
    filesToUpload.append('Uploaded File', file[1]);
  });

  const response = await axios({
    method: 'post',
    url: `/api/upload`,
    data: filesToUpload,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

export { uploadFiles, getBrands, addBrand };
