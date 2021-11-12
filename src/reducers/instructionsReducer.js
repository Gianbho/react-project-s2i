const instructionsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_INSTRUCTIONS':
      return action.payload;
    default:
      return state;
  }
};

export default instructionsReducer
