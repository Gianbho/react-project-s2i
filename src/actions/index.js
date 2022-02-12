export const getRecipes = (prop) => {
  return {
    type: 'GET_RECIPES',
    payload: prop,
  }
};

export const getRecipe = (prop) => {
  return {
    type: 'GET_RECIPE',
    payload: prop,
  }
};

export const getIngredients = (prop) => {
  return {
    type: 'GET_INGREDIENTS',
    payload: prop,
  }
};

export const getInstructions = (prop) => {
  return {
    type: 'GET_INSTRUCTIONS',
    payload: prop,
  }
};

export const getLikedIngredients = (prop) => {
  return{
    type: 'GET_LIKED_ING',
    payload: prop,
  }
};

export const getNotLikedIngredients = (prop) => {
  return{
    type:'GET_NOT_LIKED_ING',
    payload: prop,
  }
};

export const saveFavRecipes = (prop) => {
  return {
    type: 'SAVE_FAV_RECIPE',
    payload: prop,
  }
};

export const removeFavRecipe = (prop) => {
  return {
    type: 'REMOVE_FAV_RECIPE',
    payload: prop,
  }
};

export const searchRecipes = (prop) => {
  return {
    type: 'SEARCH_RECIPES',
    payload: prop,
  }
};
