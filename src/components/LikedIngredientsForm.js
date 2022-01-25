import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getLikedIngredients} from '../actions'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatchState();
    }}>
      <input type='text' placeholder='' value={state[0]}
        onChange={(e) => {
          e.preventDefault();
          setState({
            ...state,
            likedFirst: e.target.value,
          });
        }
      }>
      </input>
      <input type='text' placeholder='' value={state[1]}
        onChange={(e) => {
          e.preventDefault();
          setState({
            ...state,
            likedSecond: e.target.value,
          });
        }
      }>
      </input>
      <input type='text' placeholder='' value={state[2]}
        onChange={(e) => {
          e.preventDefault();
          setState({
            ...state,
            likedThird: e.target.value,
          });
        }
      }>
      </input>
      <button type='submit'>submit</button>
    </form>
  );
}

export default LikedIngredientsForm;
