import '../App.css';
import '../mybootstrap.css';
import logo from '../vite.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Button,Offcanvas} from 'react-bootstrap';


export default function Nav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header className="nav-bar position-sticky">
                <nav className="nav-bar-inn">
                    <div className='pad'>
                        <img src={logo} alt="my-logo" />
                        <ul className='d-lg-flex d-none'>
                            <li className='lis'>
                                <Link to="/products"> Home</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/products/page2"> About</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/products/page3"> Contact</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/products/page4"> Feedback</Link>
                            </li>
                            <li className='lis'>
                                <Link to="/"> Feedback</Link>
                            </li>
                        </ul>
                        <div className='d-inline d-lg-none'>
                            <Button className="bg-transparent" onClick={handleShow}>
                                <i className="fa-solid fa-bars fs-1 subtle"></i>
                            </Button>

                        </div>
                    </div>
                </nav>
            </header>

            <Offcanvas show={show} onHide={handleClose} className="bro">

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="my-logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <ul className='d-block w-100' id="offcan">
                        <li className='lissy w-100'>
                            <Link to="/products"> Home</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/products/page2"> About</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/products/page3"> Contact</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/products/page4" > Feedback</Link>
                        </li>
                        <li className='lissy w-100'>
                            <Link to="/test3"> Feedback</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>



        </>
    );

}

