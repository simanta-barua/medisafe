import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,signOutUser} = useFirebase();
    return (
        <div>
              <Navbar variant={"light"} expand="lg" className="bg-off-blue   "  >
                    <Container>
                        <Navbar.Brand> <Nav.Link as={NavLink} to="/"><img src="" alt="logo">
                        </img></Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="mx-auto my-2 my-lg-0 "
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Nav.Link as={NavLink} to="/home" className="nav-link" >Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/shop" className="nav-link" >Shop</Nav.Link>
                                <Nav.Link as={NavLink} to="/blog" className="nav-link" >Blog</Nav.Link>
                                <Nav.Link as={NavLink} to="/about" className="nav-link" >About</Nav.Link>
                                <Nav.Link as={NavLink} to="/contact" className="nav-link" >Contact</Nav.Link>
                                {
                                 user.email?
                                 <Button onClick={signOutUser}>Sing Out</Button> :
                                 <Nav.Link as={NavLink} to="/singIn" className="nav-link" ><Button>Sing In</Button></Nav.Link>
                                }
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;