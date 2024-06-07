import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Scrollup } from '../animatescroll'
import '../App.css'

import { Link } from 'react-router-dom'

import { NavHashLink } from 'react-router-hash-link'
import { HiMenu } from 'react-icons/hi'
import {
  BsGithub,
  BsWhatsapp,
  BsLinkedin,
  BsFacebook,
  BsList,
  BsHouseDoorFill,
  BsPersonFill,
  BsCardChecklist,
  BsCodeSquare,
  BsTelephoneFill,
  BsGearFill,
  BsTools,
  BsGearWideConnected
} from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'

function Mainportfolionavbar({ activeLink, HandleLinkClick }) {

  const [active, setActive] = useState(true)
  return (
    <>
      <motion.div
        initial={{ y: "-300vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}

        className='position-fixed top-0 w-100'
        style={{ zIndex: 3000 }}
      >
        <Navbar
          expand='lg'
          className=' px-0 px-md-2 px-lg-5 main-nav pt-lg-3'
        >
          <Container fluid className='d-flex justify-content-between align-items-center'>

            <Navbar.Brand as={NavHashLink}
              to='/#hero-section'
              className='fs-2 m-0'
              onClick={
                () => {
                  HandleLinkClick('/');
                  setActive(true);
                }
              }
            >
              <code className='text-light d-flex justify-content-center align-items-center'>
                {/* D.<span className='trans-back drop-shadow'>append(</span>aminu
              <span className='trans-back drop-shadow'>)</span> */}
                <span className='trans-back drop-shadow fs-1'>{'<'}</span>
                <span className='trans-back'>D.aminu</span>
                <span className='trans-back drop-shadow fs-1'>{'/>'}</span>
              </code>
            </Navbar.Brand>
            <div className="d-flex justify-content-center align-items-center">

              <div className=' d-flex d-lg-none gap-2 fs-5'>
                <IconContext.Provider value={{ className: 'icons' }}>
                  <Nav.Link>
                    <BsGithub />
                  </Nav.Link>
                  <Nav.Link>
                    <BsWhatsapp />
                  </Nav.Link>
                  <Nav.Link>
                    <BsLinkedin />
                  </Nav.Link>
                  <Nav.Link>
                    <BsFacebook />
                  </Nav.Link>
                </IconContext.Provider>

              </div>
              <IconContext.Provider value={{ className: 'color-mix' }}>
                <Navbar.Toggle
                  className='border-0 shadow-none h-100 fs-1'
                  aria-controls='navbarScroll'
                  onClick={
                    () => {
                      
                      setActive(!active);
                    }
                  }
                >
                  <BsList />
                </Navbar.Toggle>
              </IconContext.Provider>

            </div>

            <Navbar.Collapse in={!active} id='navbarScroll'>
              <Nav
                className='mx-auto mt-4 mb-2 mt-lg-0 mb-lg-0 fs-5 gap-lg-4'
                style={{ maxHeight: '300px' }}
                navbarScroll
              >
                <Nav.Link
                  className={activeLink === '/' || activeLink === '/#hero-section' ? 'trans-back navLinkActive' : 'navtext '}
                  as={NavHashLink}
                  to='/#hero-section'
                  onClick={
                    () => {
                      HandleLinkClick('/#hero-section');
                      setActive(true);
                    }
                  }

                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsHouseDoorFill /> <span className='tp'>Home</span>
                  </div>

                </Nav.Link>
                <Nav.Link
                  className={activeLink === '/#about-section' ? 'trans-back navLinkActive' : 'navtext'}
                  as={NavHashLink}
                  to='/#about-section'
                  onClick={
                    () => {
                      HandleLinkClick('/#about-section');
                      setActive(true);
                    }
                  }

                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsPersonFill /> <span className='tp'>About</span>
                  </div>
                </Nav.Link>
                <Nav.Link
                  className={activeLink === '/#skills-section' ? 'trans-back navLinkActive' : 'navtext'}
                  as={NavHashLink}
                  to='/#skills-section'
                  onClick={
                    () => {
                      HandleLinkClick('/#skills-section');
                      setActive(true);
                    }
                  }
                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsCardChecklist /> <span className='tp'>Skills</span>
                  </div>
                </Nav.Link>
                <Nav.Link
                  className={activeLink === '/my_services' ? 'trans-back navLinkActive' : 'navtext'}
                  as={NavHashLink}
                  to='/my_services'
                  onClick={
                    () => {
                      Scrollup();
                      HandleLinkClick('/my_services');
                      setActive(true);
                    }
                  }
                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsTools /> <span className='tp'>Services</span>
                  </div>
                </Nav.Link>
                {/* <Nav.Link
                  className={activeLink === '/#works-section' ? 'trans-back navLinkActive' : 'navtext'}
                  as={NavHashLink}
                  to='/#works-section'
                  onClick={
                    () => {
                      HandleLinkClick('/#works-section');
                      setActive(true);
                    }
                  }

                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsCodeSquare /> <span className='tp'>Works</span>
                  </div>
                </Nav.Link> */}
                <Nav.Link
                  className={activeLink === '/projects' ? 'trans-back navLinkActive' : 'navtext'}
                  as={NavHashLink}
                  to='/projects'
                  onClick={() => {
                    Scrollup();
                    HandleLinkClick('/projects');
                    setActive(true);
                  }}
                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsCodeSquare /> <span className='tp'>Projects</span>
                  </div>
                </Nav.Link>
                <Nav.Link
                  className={activeLink === '/contact_Me' ? 'trans-back navLinkActive' : 'navtext'}
                  as={NavHashLink}
                  to='/contact_Me'
                  onClick={() => {
                    Scrollup();
                    HandleLinkClick('/contact_Me');
                    setActive(true);
                  }}
                >
                  <div className='navlink' style={{ width: 'fit-content' }}>
                    < BsTelephoneFill /> <span className='tp'>Contact</span>
                  </div>
                </Nav.Link>



              </Nav>
              <div className='ms-5 d-none d-lg-flex fs-5 gap-3'>
                <IconContext.Provider value={{ className: 'icons' }}>
                  <Nav.Link
                    href="https://github.com/Dele2009/"
                    target="tab"
                  >
                    <BsGithub />
                  </Nav.Link>

                  <Nav.Link
                    href="https://wa.me/+2348080844094"
                    target="tab"
                  >
                    <BsWhatsapp />
                  </Nav.Link>

                  <Nav.Link
                    href='https://www.linkedin.com/in/bamidele-aminu-14332425a'
                    target='tab'
                  >
                    <BsLinkedin />
                  </Nav.Link>
                  {/* <Nav.Link>
                    <BsFacebook />
                  </Nav.Link> */}
                </IconContext.Provider>

              </div>

            </Navbar.Collapse>
            {/* </div> */}


          </Container>
        </Navbar>
      </motion.div>
    </>
  )
}
export default Mainportfolionavbar;
