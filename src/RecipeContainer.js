import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const RecipeContainer = ({ id, title, image }) => {

  // const [nutrients, setNutrients] = useState([]);
  // const fetchNutrients = async (id) => {
  //   const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`);
  //   const data = await response.json();
  //   setNutrients(data);
  //   console.log(data);
  // };
  useState(() => {

  }, []);

  return (
      <div>
        <h1>{title}</h1>
        <Link to={`/recipe/${id}`}>
          <img src={image}/>
        </Link>
        <p>{}</p>
      </div>
  );
};

export default RecipeContainer
