import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Recipe from './pages/Recipe'
import MyRecipes from './pages/MyRecipes'
import SearchResults from './pages/SearchResults'
import Navbar from './components/Navbar'
import Error from './Error'


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
      <Route path='search-results/:query' element={<SearchResults />} />
    </Routes>
   </Router>
  );
};

export default App;
