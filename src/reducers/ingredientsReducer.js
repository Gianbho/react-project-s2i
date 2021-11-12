const ingredientsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_INGREDIENTS':
      return action.payload;
    default:
      return state;
  }
};

export default ingredientsReducer
