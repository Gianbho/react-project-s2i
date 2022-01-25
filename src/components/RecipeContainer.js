import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {RiPlantLine} from 'react-icons/ri'

const API_KEY = process.env.REACT_APP_API_KEY;

const RecipeContainer = ({ id, title, image, ingredients, diet }) => {

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
      </div>
  );
};

export default RecipeContainer
