import recipesReducer from './recipesReducer'
import recipeReducer from './recipeReducer'
import ingredientsReducer from './ingredientsReducer'
import instructionsReducer from './instructionsReducer'
import likedIngredientsReducer from './likedIngredientsReducer'
import notLikedIngredientsReducer from './notLikedIngredientsReducer'
import favRecipesReducer from './favRecipesReducer'
import searchRecipesReducer from './searchRecipesReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  favRecipes: favRecipesReducer,
  recipes: recipesReducer,
  recipe: recipeReducer,
  ingredients: ingredientsReducer,
  instructions: instructionsReducer,
  likedIngredients: likedIngredientsReducer,
  notLikedIngredients: notLikedIngredientsReducer,
  searchRecipes: searchRecipesReducer,
});

export default allReducers
