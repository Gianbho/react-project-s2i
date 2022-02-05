import recipesReducer from './recipesReducer'
import recipeReducer from './recipeReducer'
import ingredientsReducer from './ingredientsReducer'
import instructionsReducer from './instructionsReducer'
import likedIngredientsReducer from './likedIngredientsReducer'
import notLikedIngredientsReducer from './notLikedIngredientsReducer'
import idReducer from './idReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  ids: idReducer,
  recipes: recipesReducer,
  recipe: recipeReducer,
  ingredients: ingredientsReducer,
  instructions: instructionsReducer,
  likedIngredients: likedIngredientsReducer,
  notLikedIngredients: notLikedIngredientsReducer,
});

export default allReducers
