import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import RecipesList from '../components/RecipesList'
import LikedIngredientsForm from '../components/LikedIngredientsForm'
import NotLikedIngredientsForm from '../components/NotLikedIngredientsForm'

// REACT_APP_API_KEY = "ae096a3cdb31469f825397ed352cf9ac"
// REACT_APP_API_KEY = "1ee2b871ce394004aa41b0cc65c61718"

const Home = ({}) => {
  // const [state, setState] = useState({
  //   likedIngredients: [],
  //   notLikedIngredients: [1, 2, 3],
  // });

  const likedIngredients = useSelector(state => state.likedIngredients);
  const notLikedIngredients = useSelector(state => state.notLikedIngredients);

  useEffect(() => {
    //setState({...state, likedIngredients: [ing.likedFirst, ing.likedSecond, ing.likedThird]})
    console.log();
  }, [])

  return(
  <>
    {likedIngredients.length === 3 && notLikedIngredients.length === 3 ?
      <RecipesList /> : likedIngredients.length === 3 ? <NotLikedIngredientsForm /> : <LikedIngredientsForm />
    }
    <button onClick={() => {
      console.log(likedIngredients);
      console.log(notLikedIngredients);
    }}>click</button>
  </>
  );
}

export default Home;
