import React, { useState, useEffect } from 'react'
import { HashRouter as Router,createHashRouter, RouterProvider, Routes, Route, useLocation } from 'react-router-dom';


import Homepage from './Portfolio-Pages/Home'
import Myprojects from './Portfolio-Pages/projects'
import ContactMe from './Portfolio-Pages/contactMe'
import Errormessage from './Portfolio-Pages/errorPage'
import Navroot from './Navbarcomponent/route'

const Portfolio = () => {
  const getCurrentPath = () => window.location.hash.substring(1) || '/'

  const [activeLink, setActiveLink] = useState(getCurrentPath());

  useEffect(() => {
    const handleHashChange = () => {
      HandleLinkClick(getCurrentPath());
      
    };
    const y = getCurrentPath()
   
  
    console.log("activelink",activeLink)
    console.log("getCurrentlink", y)

    

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [getCurrentPath()]);


  const HandleLinkClick = (path) => {
    setActiveLink(path);
  };
  const router = createHashRouter([
    {
      path: '/',
      //navbar as rootelement
      element: <Navroot activeLink={activeLink} HandleLinkClick={HandleLinkClick}/>,
      //error syntax element
      errorElement: <Errormessage  />,
      //nested pages
      children: [
        {
          //homepage path & element
          path: '/',
          element: <Homepage  activeLink={activeLink} HandleLinkClick={HandleLinkClick}/>
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
      <RouterProvider router={router}/>
      {/* <Navroot /> */}
      
    </div>
  )
}

// const Portfolio = () => {
//   <Router>
//     <App />
//   </Router>
// }

export default Portfolio




