import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import RecipeContainer from '../components/RecipeContainer'
import {saveIDs} from '../actions'

const MyRecipes = () => {
  const iDs = useSelector(state => state.ids);
  const dispatch = useDispatch();


  const [favRecipes, setFavRecipes] = useState([]);
  let newFavRecipes = [];

  const API_KEY = process.env.REACT_APP_API_KEY;

  let newIDs = [];

  function fetchRecipes() {
    //   iDs.forEach(async (id) => {
    //     const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    //     newFavRecipes = [...newFavRecipes, response.data];
    //     setFavRecipes(newFavRecipes);
    // });
    for(let i = 0; i < localStorage.length; i++) {
      const response = axios.get(`https://api.spoonacular.com/recipes/${localStorage.getItem(localStorage.key(i))}/information?apiKey=${API_KEY}`);
      newFavRecipes = [...newFavRecipes, response.data];
      setFavRecipes(newFavRecipes);
    }
  };

  useEffect(() => {
    fetchRecipes();
    console.log(localStorage.length);
    console.log(localStorage.key(0));
    console.log(localStorage.key(1));
    console.log(localStorage.key(2));
    console.log(iDs);
    console.log(favRecipes);
  }, []);

  return(
    <>
      {favRecipes.map((favRecipe) => {
        return (
            <RecipeContainer key={favRecipe.id} title={favRecipe.title} image={favRecipe.image} id={favRecipe.id} diet={favRecipe.vegan} ingredients={favRecipe.extendedIngredients} />
        )}
      )}
      <button onClick={() => {
        console.log(favRecipes);
        console.log(iDs);
        }
      }>console.log state</button>
      <Link to='/'><button>Home</button></Link>
    </>
  );
}

export default MyRecipes;
