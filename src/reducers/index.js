import recipesReducer from './recipesReducer'
import recipeReducer from './recipeReducer'
import ingredientsReducer from './ingredientsReducer'
import instructionsReducer from './instructionsReducer'
import likedIngredientsReducer from './likedIngredientsReducer'
import notLikedIngredientsReducer from './notLikedIngredientsReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  ingredients: ingredientsReducer,
  instructions: instructionsReducer,
  likedIngredients: likedIngredientsReducer,
  notLikedIngredients: notLikedIngredientsReducer,
});

export default allReducers
