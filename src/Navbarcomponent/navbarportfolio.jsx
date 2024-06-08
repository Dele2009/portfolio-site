import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Scrollup } from '../animatescroll'
import '../App.css'

import { Link } from 'react-router-dom'

import { NavHashLink } from 'react-router-hash-link'
import { HiMenu } from 'react-icons/hi'
// import ThemeToggle from '../themeTogle'
import '../themeToggle.css';
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

function Mainportfolionavbar({ activeLink, HandleLinkClick, theme, toggleTheme }) {

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
                  <div className="dark_mode">
                    <input
                      type="checkbox"
                      className="dark_mode_input"
                      id="darkmode-toggle"
                      checked={theme === 'dark'}
                      onChange={toggleTheme}
                    />
                    <label className="dark_mode_label" htmlFor="darkmode-toggle">
                      {/* <SunIcon className="sun" /> */}
                      {/* <MoonIcon className="moon" /> */}
                      <svg width="800px" className="sun" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Environment / Sun">
                          <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      <svg width="800px" className="moon" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39703 11.6315C3.39703 16.602 7.42647 20.6315 12.397 20.6315C15.6858 20.6315 18.5656 18.8664 20.1358 16.23C16.7285 17.3289 12.6922 16.7548 9.98282 14.0455C7.25201 11.3146 6.72603 7.28415 7.86703 3.89293C5.20697 5.47927 3.39703 8.38932 3.39703 11.6315ZM21.187 13.5851C22.0125 13.1021 23.255 13.6488 23 14.5706C21.7144 19.2187 17.4543 22.6315 12.397 22.6315C6.3219 22.6315 1.39703 17.7066 1.39703 11.6315C1.39703 6.58874 4.93533 2.25845 9.61528 0.999986C10.5393 0.751502 11.0645 1.99378 10.5641 2.80935C8.70026 5.84656 8.83194 10.0661 11.397 12.6312C13.9319 15.1662 18.1365 15.3702 21.187 13.5851Z" fill="#0F0F0F" />
                      </svg>

                    </label>
                  </div>
                  {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme}/> */}
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
