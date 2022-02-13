import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'
import {searchRecipes} from '../actions'
import '../styles/navbar.css'

const Navbar = () => {

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [searchInput, setSearchInput] = useState();

  const handleSubmit = () => {
    dispatch(searchRecipes(searchInput));
  };

  return(
    <nav>
      <div className='navbar'>
        <Link to='/' className='link'>Home</Link>
        <Link to='my-recipes' className='link'>My recipes</Link>
        <BiSearchAlt title='search' size='25px' onClick={handleToggle} style={{cursor: 'pointer'}}/>
      </div>
      <form className={isOpen ? 'search-input show-search' : 'search-input'} onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <input type='text' placeholder='' onChange={
          (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          }}/>
        <Link to={`/search-results/${searchInput}`}>
          <button type='submit' onClick={() => console.log(searchInput)}>search</button>
        </Link>
      </form>
    </nav>
  );
};

export default Navbar