import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Scrollup } from '../animatescroll'
import '../App.css'

import { Link } from 'react-router-dom'

import { NavHashLink } from 'react-router-hash-link'
import { HiMenu } from 'react-icons/hi'
import { BsGithub, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { IconContext } from 'react-icons'

function Mainportfolionavbar () {
  return (
    <>
      <Navbar expand='lg' className='main-nav px-lg-5' fixed='top'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' className='fs-3'>
            <code className='text-light'>
              D.<span className='trans-back drop-shadow'>append(</span>aminu
              <span className='trans-back drop-shadow'>)</span>
            </code>
          </Navbar.Brand>

          <IconContext.Provider value={{ className: 'color-mix' }}>
            <Navbar.Toggle
              className='border-0 shadow-none'
              aria-controls='navbarScroll'
            >
              <HiMenu />
            </Navbar.Toggle>
          </IconContext.Provider>

          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='mt-4 mb-2 mt-lg-0 mb-lg-0 fs-4'
              style={{ maxHeight: '300px' }}
              navbarScroll
            >
              <Nav.Link
                className='text-light'
                as={NavHashLink}
                to='/#hero-section'
              >
                Home
              </Nav.Link>
              <Nav.Link
                className='text-light'
                to='/#about-section'
                as={NavHashLink}
              >
                About me
              </Nav.Link>
              <Nav.Link
                className='text-light'
                to='/#skills-section'
                as={NavHashLink}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className='text-light'
                to='/#works-section'
                as={NavHashLink}
              >
                Myworks
              </Nav.Link>
              <Nav.Link
                className='text-light'
                as={Link}
                to='/projects'
                onClick={() => Scrollup()}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className='text-light'
                as={Link}
                to='/contact_Me'
                onClick={() => Scrollup()}
              >
                Contact me
              </Nav.Link>
              {/* <div className='ms-5 d-flex'>
                <Nav.Link>
                  <BsGithub />
                </Nav.Link>
                <Nav.Link>
                <BsWhatsapp />
                </Nav.Link>
                <Nav.Link>
                <BsLinkedin />
                </Nav.Link>
                
              </div> */}

              {/* <Nav.Link
                className='text-light'
                href='https://products-page-phi.vercel.app'
                target='_blank'
              >
                Projects
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Mainportfolionavbar;
