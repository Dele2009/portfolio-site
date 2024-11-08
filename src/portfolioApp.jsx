import React, { useState, useEffect, useContext,useMemo } from 'react'
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
  // const { theme, toggleTheme } = useContext(ThemeContext)
  const { scrollYProgress } = useScroll()
  const [theme, setTheme] = useState('dark')



  const getCurrentPath = () => window.location.hash.substring(1) || '/'

  const [activeLink, setActiveLink] = useState(getCurrentPath());
  // useEffect(() => {
  //   
  // }, [Theme])
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme

    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme)
    document.body.className = newTheme
    localStorage.setItem("theme", newTheme)
  }
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
      element: <Navroot activeLink={activeLink} HandleLinkClick={HandleLinkClick} theme={theme} toggleTheme={toggleTheme} />,
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
        },
        {
          //Contact-me path & element
          path: '/sitemap.xml',
          //element: <ContactMe />
        }
      ]
    }
  ])

  return (
    <>
      {/* <div data-theme={theme}> */}
      {/* <div className="background-overlay"></div> */}
      <Particles theme={theme} />
      <div className='body-port' style={{ zIndex: '9999' }}>
        <RouterProvider router={router} />
        <motion.div
          className='progress-scroller main-nav'
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      {/* </div> */}
    </>
  )
}

// const Portfolio = () => {
//   // <ThemeProvider>
//     <App />
//   {/* </ThemeProvider> */}
// }

export default Portfolio




