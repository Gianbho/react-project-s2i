import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../actions'
import {getLikedIngredients} from '../actions'
import axios from 'axios'
import RecipeContainer from './RecipeContainer'


const API_KEY = process.env.REACT_APP_API_KEY;

const RecipesList = () => {

  const recipes = useSelector(state => state.recipes);
  const likedIngredients = useSelector(state => state.likedIngredients);
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const fetchRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegan&includeIngredients=${likedIngredients[0]},${likedIngredients[1]},${likedIngredients[2]}&addRecipeNutrition=true&number=3&apiKey=${API_KEY}`);
      //console.log(response.data.results);
    await dispatch(getRecipes(response.data.results));
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
    console.log(likedIngredients[0])
  }, []);

  if (error) return `Error: ${error.message}`;

  return (
    <>
      {recipes.map((recipe) => {
        console.log(recipe);
        console.log(recipe.nutrition.ingredients);
        return (
          <RecipeContainer key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} ingredients={recipe.nutrition.ingredients}/>
        )}
      )}
    </>
 );
};


export default RecipesList
