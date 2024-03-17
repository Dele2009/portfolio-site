import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'


import Homepage from './Portfolio-Pages/Home'
import Myprojects from './Portfolio-Pages/projects'
import ContactMe from './Portfolio-Pages/contactMe'
import './App.css'
import Errormessage from './Portfolio-Pages/errorPage'
import Navroot from './Navbarcomponent/route'

function Portfolio () {
  const router = createHashRouter([
    {
      path: '/',
      //navbar as rootelement
      element: <Navroot />,
      //error syntax element
      errorElement: <Errormessage />,
      //nested pages
      children: [
        {
          //homepage path & element
          path: '/',
          element: <Homepage />
        },
        {
          //projects path & element
          path: '/projects',
          element: <Myprojects />
        },
        {
          //Contact-me path & element
          path: '/contact_Me',
          element: <ContactMe />
        }
      ]
    }
  ])

  return (
    <div className='body-port'>
      <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path='/' element={<Mainportfolionavbar />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/projects' element={<Myprojects />} />
          </Route>
         

          <Route path='*' element={<Errormessage />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default Portfolio




