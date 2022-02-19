import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../actions'
import axios from 'axios'
import RecipeContainer from './RecipeContainer'

const API_KEY = process.env.REACT_APP_API_KEY;

const RecipesList = () => {

  const recipes = useSelector(state => state.recipes);
  const likedIngredients = useSelector(state => state.likedIngredients);
  const notLikedIngredients = useSelector(state => state.notLikedIngredients);
  const dispatch = useDispatch();
  const BUGGED_RECIPE = 'orange pepper';  //fetching this ingredient calls a bugged recipe

  const fetchRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegetarian&includeIngredients=${likedIngredients[0]},${likedIngredients[1]},${likedIngredients[2]}&excludeIngredients=${notLikedIngredients[0]},${notLikedIngredients[1]},${notLikedIngredients[2]},${BUGGED_RECIPE}&addRecipeNutrition=true&number=5&apiKey=${API_KEY}`);
    await dispatch(getRecipes(response.data.results));
    await console.log(response.data.results);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      {recipes.map((recipe) => {
        console.log(recipe);
        console.log(recipe.nutrition.ingredients);
        return (
          <RecipeContainer key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} diet={recipe.vegan}/>
        )}
      )}
    </>
 );
};


export default RecipesList
