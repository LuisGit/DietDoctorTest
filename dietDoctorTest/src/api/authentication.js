import { post } from './fetch';

export const login = async (email, password) => {
  try {
    return await post('auth/create', {
      username: email,
      password,
    });
  } catch (error) {
    console.log('===>', error.response.data.error);
  }
};
