import { API_URL } from '../constants';
import { getToken } from './token';
import axios from 'axios';

const getHeaders = async () => {
  const token = await getToken();
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

export const post = async (destination, body) => {
  const headers = await getHeaders();

  try {
    const postData = body;
    let axiosConfig = { headers };

    let response = await axios.post(
      `${API_URL}${destination}`,
      postData,
      axiosConfig,
    );
    return response.data;
  } catch (error) {
    return error.name;
  }
};

export const get = async (destination) => {
  const headers = await getHeaders();
  const config = {
    method: 'get',
    url: `${API_URL}${destination}`,
    headers: headers,
  };

  let result = await axios(config);
  return result;
};
