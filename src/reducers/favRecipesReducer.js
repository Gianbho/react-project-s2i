const favRecipesReducer = (state = [], action) => {
  switch(action.type){
    case 'SAVE_FAV_RECIPE':
      return [...action.payload];
      case 'REMOVE_FAV_RECIPE':
        const newState = state.filter((recipe) => recipe.id !== action.payload);
        return [...newState];
    default:
      return state;
  }
};

export default favRecipesReducer;
