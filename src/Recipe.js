import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const {id} = useParams();

  const fetchRecipe = () => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`)
    .then((response) => {
      setRecipe(response.data);
      console.log(response.data);
      setIngredients(response.data.extendedIngredients);
      console.log(response.data.extendedIngredients);
    })
  };

  const fetchInstructions = async () => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`)
    .then((response) => {
      setInstructions(response.data[0].steps);
      console.log(response.data[0].steps);
    })
  };

  useEffect(() => {
    fetchRecipe();
    fetchInstructions();
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
      {instructions.map((instruction) => {
        return (
          <h2 key={instruction.number}>{instruction.step}</h2>
        );
      })}
      <Link to='/'><button>Back home</button></Link>
    </div>
  );
};

export default Recipe
