import recipesReducer from './recipesReducer'
import recipeReducer from './recipeReducer'
import ingredientsReducer from './ingredientsReducer'
import instructionsReducer from './instructionsReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  ingredients: ingredientsReducer,
  instructions: instructionsReducer,
});

export default allReducers
