const likedIngredientsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_LIKED_ING':
      return [...action.payload];
    default:
      return state;
  }
};

export default likedIngredientsReducer;
