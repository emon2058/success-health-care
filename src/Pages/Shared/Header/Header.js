import React from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={HashLink} to="/home#home">SH CARE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#testimonial">Testimonials</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} to="/discount">Discount</Nav.Link>
                            {user?.email?<Stack direction="horizontal">
                                <small className="text-info">{user.displayName?user.displayName : user.email.substring(0, user.email.indexOf("@"))}</small>
                            <Button variant="dark" onClick={logOut}>Logout</Button> 
                            </Stack>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;