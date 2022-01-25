const notLikedIngredientsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_NOT_LIKED_ING':
      return [...action.payload];
    default:
      return state;
  }
};

export default notLikedIngredientsReducer;
