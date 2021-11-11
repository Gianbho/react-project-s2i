import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';

import RecipesList from './RecipesList'
import Recipe from './Recipe'
import Error from './Error'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<RecipesList />} />
      <Route path='recipe/:id' element={<Recipe />} />
      <Route path='*' element={
        <>
          <Link to='/'>
            <button>back home</button>
          </Link>
          <Error />
        </>
      } />
    </Routes>
   </Router>
  );
};

export default App;
