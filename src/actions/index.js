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