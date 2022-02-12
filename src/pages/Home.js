import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import RecipesList from '../components/RecipesList'
import LikedIngredientsForm from '../components/LikedIngredientsForm'
import NotLikedIngredientsForm from '../components/NotLikedIngredientsForm'
// REACT_APP_API_KEY = "ae096a3cdb31469f825397ed352cf9ac"
// REACT_APP_API_KEY = "1ee2b871ce394004aa41b0cc65c61718"
// REACT_APP_API_KEY = "f071caa85e3b452284e343e13ee1da2a"
// REACT_APP_API_KEY = "08024b3c268a4224a8a6f87280e30b84"

const Home = ({}) => {
  // const [state, setState] = useState({
  //   likedIngredients: [],
  //   notLikedIngredients: [1, 2, 3],
  // });
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchRecipes); //PROBABILMENTE NON NE HO PIU' BISOGNO

  const likedIngredients = useSelector(state => state.likedIngredients);
  const notLikedIngredients = useSelector(state => state.notLikedIngredients);

  useEffect(() => {
    //setState({...state, likedIngredients: [ing.likedFirst, ing.likedSecond, ing.likedThird]})
  }, [])

  return(
  <>
    {likedIngredients.length === 3 && notLikedIngredients.length === 3 ?
      <RecipesList /> : likedIngredients.length === 3 ? <NotLikedIngredientsForm /> : <LikedIngredientsForm />
    }
    {searchQuery.length ? <h1>it works</h1> : <h1>it doesn't work</h1>}
    <button onClick={() => {
      console.log(searchQuery);
      console.log(notLikedIngredients);
    }}>click</button>
    <Link to='my-recipes'>My Recipes</Link>
  </>
  );
}

export default Home;
