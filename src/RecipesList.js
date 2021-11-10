import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'

// const API_KEY = '1ee2b871ce394004aa41b0cc65c61718';
const API_KEY = process.env.API_KEY;

const RecipesList = () => {

  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=fruits&diet=vegan&includeNutritions=true&number=3&apiKey=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchRecipes()
  }, []);

  return (
    <>
      {recipes.map((recipe) => {
        console.log(recipe);
        return (
          <Recipe key={recipe.id} title={recipe.title} image={recipe.image}/>
        )}
      )};
    </>
 );
};


export default RecipesList
