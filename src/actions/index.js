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

export const saveIDs = (prop) => {
  return {
    type: 'GET_ID',
    payload: prop,
  }
};
