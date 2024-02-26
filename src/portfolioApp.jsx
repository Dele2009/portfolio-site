import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Mainroute from "./Navbarcomponent/Mainrouter";
import Mainportfolionavbar from './Navbarcomponent/navbarportfolio'

import Homepage from './Portfolio-Pages/Home'
import Myprojects from './Portfolio-Pages/projects'
import './App.css'
import Errormessage from './Portfolio-Pages/errorPage'

function Portfolio () {
  return (
    <div className='body-port'>
     
      <Router>
         <Mainportfolionavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Myprojects />} />

          <Route path='*' element={<Errormessage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Portfolio
