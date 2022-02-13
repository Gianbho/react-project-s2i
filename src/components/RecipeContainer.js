import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import '../styles/recipeContainer.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {RiPlantLine} from 'react-icons/ri'
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {removeFavRecipe} from '../actions'


const API_KEY = process.env.REACT_APP_API_KEY;

const RecipeContainer = ({ id, title, image, ingredients, diet }) => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(localStorage.getItem(`${title}`) ? true : false);

  const handleClick = () => {
    if(localStorage.getItem(`${title}`) === null){
      localStorage.setItem(`${title}`, id);
      setIsSaved(!isSaved);
    } else {
      localStorage.removeItem(`${title}`);
      dispatch(removeFavRecipe(id));
      setIsSaved(!isSaved);
    }
  };

  return (
      <div className='recipe-container'>
        <div className='title-div'>
          <h2>{title}</h2>
          {diet == true ? <RiPlantLine className='veg-icon' title='Vegan' size='25px'/> : null}
        </div>
        <Link to={`/recipe/${id}`}>
          <img src={image}/>
        </Link>
        <ul>
        {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id}>{ingredient.name}</li>
            );
          }
        )}
        </ul>
        {isSaved ? <FaHeart className='heart' onClick={handleClick}/> : <FaRegHeart className='heart' onClick={handleClick} />}
      </div>
    );
};

export default RecipeContainer
