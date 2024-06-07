import React, { useState, useEffect } from 'react'
import { HashRouter as Router, createHashRouter, RouterProvider, Routes, Route, useLocation } from 'react-router-dom';

import { motion, useScroll } from 'framer-motion'

import Homepage from './Portfolio-Pages/Home'
import Myprojects from './Portfolio-Pages/projects'
import ContactMe from './Portfolio-Pages/contactMe'
import Service from './Portfolio-Pages/services'
import Errormessage from './Portfolio-Pages/errorPage'
import Navroot from './Navbarcomponent/route'
import Particles from './bgAnimated'

const Portfolio = () => {
  const { scrollYProgress } = useScroll()

  const getCurrentPath = () => window.location.hash.substring(1) || '/'

  const [activeLink, setActiveLink] = useState(getCurrentPath());

  useEffect(() => {
    const handleHashChange = () => {
      HandleLinkClick(getCurrentPath());

    };
    const y = getCurrentPath()


    console.log("activelink", activeLink)
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
      element: <Navroot activeLink={activeLink} HandleLinkClick={HandleLinkClick} />,
      //error syntax element
      errorElement: <Errormessage />,
      //nested pages
      children: [
        {
          //homepage path & element
          path: '/',
          element: <Homepage activeLink={activeLink} HandleLinkClick={HandleLinkClick} />
        },
        {
          //services path & element
          path: '/my_services',
          element: <Service />
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
    <>
    {/* <div className="background-overlay"></div> */}
      <Particles />
      <div className='body-port' style={{zIndex: '9999'}}>
        <RouterProvider router={router} />
        <motion.div
          className='progress-scroller main-nav'
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </>
  )
}

// const Portfolio = () => {
//   <Router>
//     <App />
//   </Router>
// }

export default Portfolio




