import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from './actions'
import axios from 'axios'
import RecipeContainer from './RecipeContainer'


const API_KEY = process.env.REACT_APP_API_KEY;

const RecipesList = () => {

  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const fetchRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegan&addRecipeNutrition=true&number=3&apiKey=${API_KEY}`);
      console.log(response.data.results);
    await dispatch(getRecipes(response.data.results));
  }

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
        return (
          <RecipeContainer key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id}/>
        )}
      )}
    </>
 );
};


export default RecipesList
