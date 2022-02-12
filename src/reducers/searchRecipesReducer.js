const searchRecipesReducer = (state = [], action) => {
  switch (action.type){
    case 'SEARCH_RECIPES':
    return action.payload;
    default:
    return state;
  }
};

export default searchRecipesReducer
