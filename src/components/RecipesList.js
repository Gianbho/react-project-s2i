import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../actions'
import {getLikedIngredients} from '../actions'
import {getNotLikedIngredients} from '../actions'
import axios from 'axios'
import RecipeContainer from './RecipeContainer'

const API_KEY = process.env.REACT_APP_API_KEY;

const RecipesList = () => {

  const recipes = useSelector(state => state.recipes);
  const likedIngredients = useSelector(state => state.likedIngredients);
  const notLikedIngredients = useSelector(state => state.notLikedIngredients);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const BUGGED_RECIPE = 'orange pepper';  //fetching this ingredient calls a bugged recipe

  const fetchRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegetarian&includeIngredients=${likedIngredients[0]},${likedIngredients[1]},${likedIngredients[2]}&excludeIngredients=${notLikedIngredients[0]},${notLikedIngredients[1]},${notLikedIngredients[2]},${BUGGED_RECIPE}&addRecipeNutrition=true&number=5&apiKey=${API_KEY}`);
      //console.log(response.data.results);
    await dispatch(getRecipes(response.data.results));
    await console.log(response.data.results);
  };

//   const fetchRecipes = async () => {
//     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegan&addRecipeNutrition=true&number=3&apiKey=${API_KEY}`);
//     const data = await response.json();
//
// // api's 150 requests limit
//     if(data.code === 402) {
//       alert(data.message)
//     } else {
//       console.log(data);
//     };
// // api's 150 requests limit
//
//     setRecipes(data.results);
//     console.log(data.results);
//   };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (error) return `Error: ${error.message}`;

  return (
    <>
      {recipes.map((recipe) => {
        console.log(recipe);
        console.log(recipe.nutrition.ingredients);
        return (
          <RecipeContainer key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} ingredients={recipe.nutrition.ingredients} diet={recipe.vegan}/>
        )}
      )}
    </>
 );
};


export default RecipesList
