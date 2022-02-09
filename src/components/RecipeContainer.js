import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {RiPlantLine} from 'react-icons/ri'
import {removeFavRecipe} from '../actions'


const API_KEY = process.env.REACT_APP_API_KEY;

const RecipeContainer = ({ id, title, image, ingredients, diet }) => {
  const dispatch = useDispatch();
  return (
      <div>
        <h1>{title}</h1>
        {diet == true ? <RiPlantLine color='green' title='Vegan' size='25px'/> : null}
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
      <button type='button' id='btn' onClick={() => {
        if(localStorage.getItem(`${title}`) === null){
          localStorage.setItem(`${title}`, id);
        } else {
          localStorage.removeItem(`${title}`);
          dispatch(removeFavRecipe(id))
        }
      }}>Save</button>
      </div>
  );
};

export default RecipeContainer
