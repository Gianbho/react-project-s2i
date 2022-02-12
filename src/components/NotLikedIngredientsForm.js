import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getNotLikedIngredients} from '../actions'
import '../styles/ingredientsForm.css'

const NotLikedIngredientsForm = (props) => {
  const [state, setState] = useState({
  });

  let newState = [];

const dispatchState = () => {
   newState = [state.notLikedFirst, state.notLikedSecond, state.notLikedThird];
  if (newState[0]) {
    console.log(newState);
    dispatch(getNotLikedIngredients(newState));
  } else {
    return false;
  }
};

const dispatch = useDispatch();

  return(
    <>
      <form className='ingredientsForm' onSubmit={(e) => {
        e.preventDefault();
        dispatchState();
      }}>
      <h1>Ora 3 ingredienti che odi?</h1>
        <input type='text' placeholder='' value={state[0]}
          onChange={(e) => {
            e.preventDefault();
            setState({
              ...state,
              notLikedFirst: e.target.value,
            });
          }
        }>
        </input>
        <input type='text' placeholder='' value={state[1]}
          onChange={(e) => {
            e.preventDefault();
            setState({
              ...state,
              notLikedSecond: e.target.value,
            });
          }
        }>
        </input>
        <input type='text' placeholder='' value={state[2]}
          onChange={(e) => {
            e.preventDefault();
            setState({
              ...state,
              notLikedThird: e.target.value,
            });
          }
        }>
        </input>
        <button type='submit'>submit</button>
      </form>
    </>
  );
}

export default NotLikedIngredientsForm;
