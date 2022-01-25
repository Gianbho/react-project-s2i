const myRecipesReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_RECIPE_ID':
      return [...state, action.payload];
  //  case 'REMOVE_RECIPE_ID':      
    default:
      return state;
  }
};

export default myRecipesReducer;
