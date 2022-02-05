import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {RiPlantLine} from 'react-icons/ri'


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
      <button type='button' onClick={() => {
        if(localStorage.getItem(`${title}`) === null){
          localStorage.setItem(`${title}`, id);
        } else {
          localStorage.removeItem(`${title}`);
        }
      }}>Save</button>
      </div>
  );
};

export default RecipeContainer
