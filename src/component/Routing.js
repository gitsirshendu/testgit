import React from 'react'
import {BrowserRouter as Router, Routes} from  'react-router-dom'
import Home from '../page/Home'

const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Routing