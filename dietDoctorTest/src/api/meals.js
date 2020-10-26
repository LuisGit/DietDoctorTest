import { doPost } from './fetch';

export const getMeals = async (data) => {
  try {
    const mealsResponse = await doPost('/v1/', data);
    return mealsResponse.data.data.memberMealplans;
  } catch (error) {
    console.log('===>', error.response.data.error);
  }
};
