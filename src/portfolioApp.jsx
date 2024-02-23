import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Mainroute from "./Navbarcomponent/Mainrouter";
import Mainportfolionavbar from './Navbarcomponent/navbarportfolio'

import Homepage from './Portfolio-Pages/Home'
import './App.css'
import Errormessage from './Portfolio-Pages/errorPage'

function Portfolio () {
  return (
    <div className='body-port'>
      <Router>
        <Routes>
          <Route path='/' element={<Mainportfolionavbar />}>
            <Route path='' element={<Homepage />} />
          </Route>
          <Route path='*' element={<Errormessage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Portfolio
