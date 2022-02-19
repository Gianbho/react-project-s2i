import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { getLikedIngredients } from '../actions'
import '../styles/ingredientsForm.css'

const LikedIngredientsForm = (props) => {
  const [state, setState] = useState({
  });

  let newState = [];

const dispatchState = () => {
   newState = [state.likedFirst, state.likedSecond, state.likedThird];
  if (newState[0]) {
    console.log(newState);
    dispatch(getLikedIngredients(newState));
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
      <h1>3 ingredients you love</h1>
        <input type='text' placeholder='' value={state[0]}
          onChange={(e) => {
            e.preventDefault();
            setState({
              ...state,
              likedFirst: e.target.value,
            });
          }
        } required>
        </input>
        <input type='text' placeholder='' value={state[1]}
          onChange={(e) => {
            e.preventDefault();
            setState({
              ...state,
              likedSecond: e.target.value,
            });
          }
        } required>
        </input>
        <input type='text' placeholder='' value={state[2]}
          onChange={(e) => {
            e.preventDefault();
            setState({
              ...state,
              likedThird: e.target.value,
            });
          }
        } required>
        </input>
        <button className='form-btn' type='submit'>love 'em!</button>
      </form>
    </>
  );
}

export default LikedIngredientsForm;
