import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipe, getIngredients, getInstructions } from '../actions'
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {RiPlantLine} from 'react-icons/ri'
import '../App.css'
import '../styles/recipe.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = () => {
  const recipe = useSelector(state => state.recipe);
  const ingredients = useSelector (state => state.ingredients);
  const instructions = useSelector(state => state.instructions);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();

  const [isSaved, setIsSaved] = useState(false);

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

  const handleClick = () => {
      if(localStorage.getItem(`${recipe.title}`) === null){
        localStorage.setItem(`${recipe.title}`, id);
        setIsSaved(!isSaved)
      } else {
        localStorage.removeItem(`${recipe.title}`);
        setIsSaved(!isSaved);
      }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(!isLoading), 1000);
    fetchRecipe();
    fetchInstructions();
    fetchIngredients();
    setIsSaved(localStorage.getItem(`${recipe.title}`) ? true : false);
    console.log(recipe.title)
  }, []);


  return (
    isLoading ? <div className='static-width'><h1 style={{fontFamily: 'Recipety', fontSize: '75px', textAlign: 'center', marginTop: '150px'}}>Loading...</h1></div> : <div className='recipe static-width'>
      <div className='recipe-title-div'>
        <h1>{recipe.title}</h1>
        {recipe.vegan === true ? <RiPlantLine className='veg-icon' title='Vegan' size='25px'/> : null}
      </div>
      <img src={recipe.image} alt={recipe.title + ' image'} />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              {ingredient.name + ' '}
            </li>
          );
        })}
      </ul>
      <h3>Method</h3>
      {instructions.map((instruction) => {
        return (
          <p key={instruction.number}>{instruction.step}</p>
        );
      })}
      {localStorage.getItem(`${recipe.title}`) ? <FaHeart size='28px' className='heart' onClick={handleClick}/> : <FaRegHeart size='30px' className='heart' onClick={handleClick} />}
    </div>
  );
};

export default Recipe
