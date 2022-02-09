import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import RecipeContainer from '../components/RecipeContainer'
import {saveFavRecipes} from '../actions'

const MyRecipes = () => {
  const favRecipes = useSelector(state => state.favRecipes);
  const dispatch = useDispatch();

  let newFavRecipes = [];

  const API_KEY = process.env.REACT_APP_API_KEY;

  let newIDs = [];

  async function fetchRecipes () {
    //   iDs.forEach(async (id) => {
    //     const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    //     newFavRecipes = [...newFavRecipes, response.data];
    //     setFavRecipes(newFavRecipes);
    // });
    for(let i = 0; i < localStorage.length; i++) {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${localStorage.getItem(localStorage.key(i))}/information?apiKey=${API_KEY}`);
        newFavRecipes = [...newFavRecipes, response.data];
        dispatch(saveFavRecipes(newFavRecipes));
    }
  };

  useEffect(() => {
    fetchRecipes();
    console.log(localStorage.length);
    console.log(localStorage.key(0));
    console.log(localStorage.key(1));
    console.log(localStorage.key(2));
    console.log(favRecipes);
  }, []);

  return(
    <>
      {(favRecipes.length === localStorage.length) ? (favRecipes.map((favRecipe) => {
        return (
            <RecipeContainer key={favRecipe.id} title={favRecipe.title} image={favRecipe.image} id={favRecipe.id} diet={favRecipe.vegan} ingredients={favRecipe.extendedIngredients} />
          );
        }
      )) : <h1>Loading</h1>
    }
      <button onClick={() => {
        console.log(favRecipes);
        }
      }>console.log state</button>
      <Link to='/'><button>Home</button></Link>
    </>
  );
}

export default MyRecipes;
