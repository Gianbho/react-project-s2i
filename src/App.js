import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Error from './Error'
import MyRecipes from './pages/MyRecipes'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='recipe/:id' element={<Recipe />} />
      <Route path='*' element={
        <>
          <Link to='/'>
            <button>back home</button>
          </Link>
          <Error />
        </>
      } />
      <Route path='my-recipes' element={<MyRecipes />} />
    </Routes>
   </Router>
  );
};

export default App;
