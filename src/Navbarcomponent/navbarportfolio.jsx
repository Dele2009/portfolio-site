import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../App.css";
import "../mybootstrap.css";
import { Link,Outlet } from "react-router-dom";

function Mainportfolionavbar() {
    return (
        <>




            <Navbar expand="lg" className="bg-body-tertiary px-lg-5" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" className="fs-3">
                        <code className="">
                            D.<span className="code-style">append(</span>aminu<span className="code-style">)</span>
                        </code>
                    </Navbar.Brand>
                    <Navbar.Toggle  className="border-0 shadow-none"/>
                    <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
                                <Nav.Link href="#hero-section">Home</Nav.Link>
                                <Nav.Link  href="#about-section" >About me</Nav.Link>
                                 <Nav.Link  href="#skills-section" >Skills</Nav.Link>
                                <NavDropdown href="#skills-section" title="Projects" id="offcanvasNavbarDropdown-expand-lg">
                                    <NavDropdown.Item href="#car">
                                        Html, Css & Bootstrap
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        Vanilla javascript
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/products" target="_blank">
                                        React-Js
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Outlet/>

        </>
    );
}
export default Mainportfolionavbar;