import React from 'react'
import {Route, BrowserRouter as Router, Routes} from  'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Navbar from './Navbar'

const Routing = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Routing