import { doPost } from './fetch';

export const getRecipies = async (data) => {
  try {
    const recipeData = await doPost('/v1/', data);
    return recipeData.data.data.listRecipes.recipes;
  } catch (error) {
    console.log('===>', error.response.data.error);
  }
};
