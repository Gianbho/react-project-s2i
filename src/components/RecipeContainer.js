import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

const RecipeContainer = ({ id, title, image, ingredients }) => {

  return (
      <div>
        <h1>{title}</h1>
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
