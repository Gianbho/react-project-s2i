import React from 'react'
import { useSelector } from 'react-redux'
import RecipesList from '../components/RecipesList'
import LikedIngredientsForm from '../components/LikedIngredientsForm'
import NotLikedIngredientsForm from '../components/NotLikedIngredientsForm'
// REACT_APP_API_KEY = "ae096a3cdb31469f825397ed352cf9ac"
// REACT_APP_API_KEY = "1ee2b871ce394004aa41b0cc65c61718"
// REACT_APP_API_KEY = "f071caa85e3b452284e343e13ee1da2a"
// REACT_APP_API_KEY = "08024b3c268a4224a8a6f87280e30b84"

const Home = () => {

  const likedIngredients = useSelector(state => state.likedIngredients);
  const notLikedIngredients = useSelector(state => state.notLikedIngredients);

  return(
  <div className='static-width'>
    {
      likedIngredients.length === 3 && notLikedIngredients.length === 3 ?
      <RecipesList /> : likedIngredients.length === 3 ? <NotLikedIngredientsForm /> : <LikedIngredientsForm />
    }
  </div>
  );
}

export default Home;
