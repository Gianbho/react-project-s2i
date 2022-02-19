import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import RecipeContainer from '../components/RecipeContainer'
import {saveFavRecipes} from '../actions'
import '../styles/recipeContainer.css'

const MyRecipes = () => {
  const favRecipes = useSelector(state => state.favRecipes);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  let newFavRecipes = [];

  const API_KEY = process.env.REACT_APP_API_KEY;

  async function fetchRecipes () {
    for(let i = 0; i < localStorage.length; i++) {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${localStorage.getItem(localStorage.key(i))}/information?apiKey=${API_KEY}`);
        newFavRecipes = [...newFavRecipes, response.data];
        dispatch(saveFavRecipes(newFavRecipes));
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(!isLoading), 150);
    fetchRecipes();
  }, []);

  return(
    isLoading ?
    <div className='static-width'><h1 style={{fontFamily: 'Recipety', fontSize: '75px', textAlign: 'center', marginTop: '150px'}}>Loading...</h1></div>
    :
    <div className='static-width'>
        {(favRecipes.length === localStorage.length) ? (favRecipes.map((favRecipe) => {
          return (
              <RecipeContainer key={favRecipe.id} title={favRecipe.title} image={favRecipe.image} id={favRecipe.id} diet={favRecipe.vegan} />
            );
          }
        )) : <h1 style={{fontFamily: 'Recipety', fontSize: '75px', textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
      }
      </div>
  );
}

export default MyRecipes;
