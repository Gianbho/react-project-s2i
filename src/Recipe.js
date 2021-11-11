import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const {id} = useParams();

  const fetchRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
    const data = await response.json();
    setRecipe(data);
    console.log(data);
    setIngredients(data.extendedIngredients);
    console.log(data.extendedIngredients);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className='recipe'>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} />
      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              {ingredient.name + ' '}
            </li>
          );
        })}
      </ul>
      <Link to='/'><button>Back home</button></Link>
    </div>
  );
};

export default Recipe
