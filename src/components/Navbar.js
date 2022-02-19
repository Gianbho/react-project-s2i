import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'
import '../styles/navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [searchInput, setSearchInput] = useState();

  return(
    <nav>
      <div className='navbar'>
        <Link to='/' className='link'>Home</Link>
        <Link to='my-recipes' className='link'>My recipes</Link>
        <BiSearchAlt title='search' size='25px' onClick={handleToggle} style={{cursor: 'pointer', color: '#70AF85'}}/>
      </div>
      <form className={isOpen ? 'search-input show-search' : 'search-input'} onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type='text' placeholder='' onChange={
          (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          }}/>
        <Link to={`/search-results/${searchInput}`}>
          <button className='search-btn' type='submit' onClick={() => console.log(searchInput)}>search</button>
        </Link>
      </form>
    </nav>
  );
};

export default Navbar
