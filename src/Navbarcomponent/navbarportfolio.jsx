import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import '../App.css'
import '../mybootstrap.css'
import { Link, Outlet } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
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
            <Navbar.Toggle className='border-0 shadow-none'>
              <HiMenu />
            </Navbar.Toggle>
          </IconContext.Provider>

          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-lg'
            className='main-nav'
            placement='start'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                <code className='text-light'>
                  D.<span className='trans-back drop-shadow'>append(</span>aminu
                  <span className='trans-back drop-shadow'>)</span>
                </code>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3 fs-5'>
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
                <Nav.Link className='text-light' as={Link} target="_blank" to='/products'>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
}
export default Mainportfolionavbar
