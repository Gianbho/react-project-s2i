import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import '../styles/recipeContainer.css'
import { Link } from 'react-router-dom'
import {RiPlantLine} from 'react-icons/ri'
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {removeFavRecipe} from '../actions'

const RecipeContainer = ({ id, title, image, diet }) => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(localStorage.getItem(`${title}`) ? true : false);

  const handleClick = () => {
    if(localStorage.getItem(`${title}`) === null){
      localStorage.setItem(`${title}`, id);
      setIsSaved(!isSaved);
    } else {
      localStorage.removeItem(`${title}`);
      dispatch(removeFavRecipe(id));
      setIsSaved(!isSaved);
    }
  };

  return (
      <div className='recipe-container'>
        <div className='title-div'>
          <h2>{title}</h2>
          {diet === true ? <RiPlantLine className='veg-icon' title='Vegan' size='25px'/> : null}
        </div>
        <img src={image} alt={title + ' image'}/>
        <div className='recipe-container-btns-div'>
          <Link to={`/recipe/${id}`} className='btn'>Open</Link>
          {isSaved ? <FaHeart size='28px' className='heart' onClick={handleClick}/> : <FaRegHeart size='30px' className='heart' onClick={handleClick} />}
        </div>
      </div>
    );
};

export default RecipeContainer
