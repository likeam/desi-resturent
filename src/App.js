import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/contact' element = {<Contacts />} />
        <Route path='/menu' element = {<Menu />} />
        <Route path='*' element = {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App