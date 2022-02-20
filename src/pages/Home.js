import React from 'react'
import { useSelector } from 'react-redux'
import RecipesList from '../components/RecipesList'
import '../App.css'
import LikedIngredientsForm from '../components/LikedIngredientsForm'
import NotLikedIngredientsForm from '../components/NotLikedIngredientsForm'

const Home = () => {

  const likedIngredients = useSelector(state => state.likedIngredients);
  const notLikedIngredients = useSelector(state => state.notLikedIngredients);
  const recipes = useSelector(state => state.recipes);

  return(
  <div className='static-width'>
    {recipes.length ? <h1 style={{textAlign: 'center', fontFamily: 'Recipety', fontSize: '55px'}}>Suggested Recipes</h1> : <div></div>}
    {
      likedIngredients.length === 3 && notLikedIngredients.length === 3 ?
      <RecipesList /> : likedIngredients.length === 3 ? <NotLikedIngredientsForm /> : <LikedIngredientsForm />
    }
  </div>
  );
}

export default Home;
