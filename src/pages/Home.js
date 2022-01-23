import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import RecipesList from '../components/RecipesList'
import IngredientsForm from '../components/IngredientsForm'

const Home = ({}) => {
  // const [state, setState] = useState({
  //   likedIngredients: [],
  //   notLikedIngredients: [1, 2, 3],
  // });

  const state = useSelector(state => state.likedIngredients);

  useEffect(() => {
    //setState({...state, likedIngredients: [ing.likedFirst, ing.likedSecond, ing.likedThird]})
    console.log();
  }, [])

  return(
  <>
    {state.length === 3 ?
      <RecipesList /> : <IngredientsForm />
    }
    <button onClick={() => console.log(state)}>click</button>
  </>
  );
}

export default Home;
