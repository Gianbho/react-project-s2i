import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipe, getIngredients, getInstructions, getRecipeId } from '../actions'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = () => {
  const recipe = useSelector(state => state.recipe);
  const ingredients = useSelector (state => state.ingredients);
  const instructions = useSelector(state => state.instructions);
  const dispatch = useDispatch();
  const {id} = useParams();
  const myRecipes = useSelector(state => state.myRecipes);
  const [newId, setNewId] = useState(id);

  const fetchRecipe = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
    dispatch(getRecipe(response.data));
      console.log(response.data);
    };

  const fetchIngredients = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
    dispatch(getIngredients(response.data.extendedIngredients));
      console.log(response.data.extendedIngredients);
  }


  const fetchInstructions = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`);
    if(response.data[0]) {
      dispatch(getInstructions(response.data[0].steps));
      console.log(response.data[0].steps);
    } else {
      console.log(response.data);
    };
  };

  useEffect(() => {
    fetchRecipe();
    fetchInstructions();
    fetchIngredients();
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
      <button type='button' onClick={() => {
        dispatch(getRecipeId(newId));
        console.log(myRecipes);
      }}>Save!</button>
      <Link to='/'><button>Back home</button></Link>
    </div>
  );
};

export default Recipe
