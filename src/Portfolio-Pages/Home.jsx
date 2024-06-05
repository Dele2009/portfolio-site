import '../App.css'
import Intro from './intro'
import Aboutme from './about-me'
import Skills from './skills'
import { Slider } from './Slider'
import React, { useState, useEffect } from 'react'


import { motion, useScroll } from 'framer-motion'
import { Slide, Reveal, Fade, Zoom } from 'react-awesome-reveal'
import useIntersectionObserver from '../scrollObseerver.js';


function Homepage ({activeLink,HandleLinkClick}) {
  const { scrollYProgress } = useScroll()

  const getCurrentPath = () => window.location.hash.substring(1) || '/'
 


  useIntersectionObserver(activeLink,HandleLinkClick)



  return (
    <>
      {/* <Zoom delay={10}> */}
        <Intro />
      {/* </Zoom> */}

      {/* <Zoom delay={10}> */}
        <Aboutme />
      {/* </Zoom> */}

      <Zoom delay={10}>
        <Skills />
      </Zoom>

      {/* <Zoom delay={10}>
        <Slider />
      </Zoom> */}

      <motion.div
        className='progress-scroller main-nav'
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}
export default Homepage

