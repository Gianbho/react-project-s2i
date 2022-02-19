import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../actions'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import RecipeContainer from '../components/RecipeContainer'

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchResults = () => {

  const dispatch = useDispatch();
  const {query} = useParams();
  const recipes = useSelector(state => state.recipes);
  const BUGGED_RECIPE = 'orange pepper';  //fetching this ingredient calls a bugged recipe

  const fetchRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&diet=vegetarian&query=${query}&excludeIngredients=${BUGGED_RECIPE}&addRecipeNutrition=true&number=5&apiKey=${API_KEY}`);
    await dispatch(getRecipes(response.data.results));
    await console.log(response.data.results);
  };

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <div className='static-width'>
      {recipes.map((recipe) => {
        console.log(recipe);
        console.log(recipe.nutrition.ingredients);
        return (
          <RecipeContainer key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} diet={recipe.vegan}/>
        )}
      )}
    </div>
 );
};


export default SearchResults
