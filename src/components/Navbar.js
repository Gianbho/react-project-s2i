import React from 'react'
import {Link} from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'

const Navbar = () => {
  return(
    <nav style={{width: '100%', display: 'flex', 'justifyContent': 'space-around'}}>
      <Link to='/'>Home</Link>
      <Link to='my-recipes'>My recipes</Link>
      <BiSearchAlt title='search' size='25px'/>
    </nav>
  );
};

export default Navbar
