import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// const API_KEY = '1ee2b871ce394004aa41b0cc65c61718';
const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = ({ id, title, image }) => {

  const [nutrients, setNutrients] = useState([]);
  const fetchNutrients = async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`);
    const data = await response.json();
    setNutrients(data);
    console.log(data);
  };
  useState(() => {
    fetchNutrients(id)
  }, []);

  return (
      <div>
        <h1>{title}</h1>
        <Link to={`/${title}`}>
          <img src={image}/>
        </Link>
        <p>{nutrients.calories}</p>
      </div>
  );
};

export default Recipe
