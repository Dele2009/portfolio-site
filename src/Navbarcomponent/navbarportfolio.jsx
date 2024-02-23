import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import '../App.css'

import { Link, Outlet } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { IconContext } from 'react-icons'

function Mainportfolionavbar () {
  return (
    <>
      <Navbar expand='lg' className='main-nav px-lg-5' fixed='top'>
        <Container fluid >
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
              style={{ maxHeight: '300px',}}
              navbarScroll
            >
              <Nav.Link className='trans-back drop-shadow' href='#hero-section'>
                Home
              </Nav.Link>
              <Nav.Link className='text-light' href='#about-section'>
                About me
              </Nav.Link>
              <Nav.Link className='text-light' href='#skills-section'>
                Skills
              </Nav.Link>
              <Nav.Link className='text-light' href='#works-section'>
                Myworks
              </Nav.Link>
              <Nav.Link
                className='text-light'
                href='https://products-page-phi.vercel.app'
                target='_blank'
              >
                Projects
              </Nav.Link>
              {/* <NavDropdown
                  href='#skills-section'
                  title='Projects'
                  id='offcanvasNavbarDropdown-expand-lg'
                >
                  <NavDropdown.Item href='#car'>
                    Html, Css & Bootstrap
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href='#'>
                    Vanilla javascript
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item as={Link} to='/products' target='_blank'>
                    React-Js
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
}
export default Mainportfolionavbar
